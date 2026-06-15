import { spawn } from 'child_process';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Try different Python commands in order of preference
    const pythonCommands = ['python', 'python3', 'py'];
    let pythonProcess = null;
    let lastError = null;

    for (const cmd of pythonCommands) {
      try {
        pythonProcess = spawn(cmd, [
          path.join(process.cwd(), 'scripts', 'predict.py'),
        ]);
        break; // If we successfully spawn, break the loop
      } catch (error) {
        lastError = error;
        continue; // Try the next command
      }
    }

    if (!pythonProcess) {
      throw new Error(`Could not start Python process: ${lastError?.message}`);
    }

    let result = '';
    let errorOutput = '';

    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        console.error('Python script error:', errorOutput);
        return res.status(500).json({ 
          error: 'Prediction failed',
          details: errorOutput 
        });
      }
      
      try {
        const parsedResult = JSON.parse(result);
        res.status(200).json(parsedResult);
      } catch (parseError) {
        console.error('Failed to parse Python output:', parseError);
        res.status(500).json({ 
          error: 'Invalid response from prediction script',
          output: result
        });
      }
    });

    // Handle process errors
    pythonProcess.on('error', (error) => {
      console.error('Process error:', error);
      res.status(500).json({ 
        error: 'Failed to start prediction process',
        details: error.message
      });
    });

  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message
    });
  }
}