# scripts/predict.py
import os
import sys
import json
import torch
import torch.nn as nn
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import yfinance as yf
from datetime import datetime, timedelta
import joblib
import pandas as pd

# Add the current directory to the path so we can import our model
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Import our model architecture
from model_architecure import ETHPricePredictor

# Get the current script directory
script_dir = os.path.dirname(os.path.abspath(__file__))
model_dir = os.path.join(script_dir, '..', 'model')

try:
    # Load model and scaler with absolute paths
    model_path = os.path.join(model_dir, 'eth_price_model.pth')
    scaler_path = os.path.join(model_dir, 'scaler.save')
    
    # Check if files exist
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model file not found at {model_path}")
    if not os.path.exists(scaler_path):
        raise FileNotFoundError(f"Scaler file not found at {scaler_path}")
    
    # Load the state dict (weights)
    state_dict = torch.load(model_path, map_location=torch.device('cpu'))
    
    # Create model instance with the same architecture as during training
    # You may need to adjust these parameters based on how you trained the model
    model = ETHPricePredictor(
        input_size=1, 
        hidden_size=100,  # Matches saved model
        num_layers=1,     # Matches saved model (1 layer)
        output_size=1
    )
    
    # Load the state dict into the model
    model.load_state_dict(state_dict)
    model.eval()  # Set model to evaluation mode

    # Load scaler
    scaler = joblib.load(scaler_path)

    # Get latest Ethereum data
    today = datetime.today().strftime('%Y-%m-%d')
    start_date = (datetime.today() - timedelta(days=365)).strftime('%Y-%m-%d')
    
    # Download data
    eth = yf.download('ETH-USD', start=start_date, end=today)
    
    # Handle multi-level columns if they exist
    if isinstance(eth.columns, pd.MultiIndex):
        eth.columns = eth.columns.droplevel(1)

    # Prepare data for prediction
    high_prices = eth['High'].values.reshape(-1, 1)
    
    # Check if we have enough data
    if len(high_prices) < 60:
        raise ValueError(f"Not enough data points. Need at least 60, got {len(high_prices)}")
    
    scaled_data = scaler.transform(high_prices)

    # Create sequences (same as during training)
    def create_sequences(data, seq_length):
        X = []
        for i in range(len(data) - seq_length):
            X.append(data[i:i+seq_length])
        return np.array(X)

    seq_length = 60
    X = create_sequences(scaled_data, seq_length)
    
    # Use only the last sequence for prediction
    X = X[-1:]  # Take only the last sequence
    
    # Convert to tensor - shape should be (batch_size, seq_length, input_size)
    X = torch.FloatTensor(X)  # Shape: (1, 60, 1)

    # Make prediction
    with torch.no_grad():
        prediction = model(X)
        predicted_price = scaler.inverse_transform(prediction.numpy())[0][0]

    # Get current price
    current_price = high_prices[-1][0]

    # Prepare result - match the frontend expected format
    result = {
        'actual': float(current_price),
        'prediction': float(predicted_price),
        'timestamp': today
    }

    print(json.dumps(result))
    
except Exception as e:
    error_msg = f"Error in prediction: {str(e)}"
    print(json.dumps({'error': error_msg}))
    sys.exit(1)