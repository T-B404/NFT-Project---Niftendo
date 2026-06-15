# scripts/model_architecture.py
import torch
import torch.nn as nn

class ETHPricePredictor(nn.Module):
    def __init__(self, input_size=1, hidden_size=100, num_layers=1, output_size=1):
        super(ETHPricePredictor, self).__init__()
        self.lstm = nn.LSTM(
            input_size=input_size,
            hidden_size=hidden_size,
            num_layers=num_layers,
            batch_first=True
        )
        self.linear = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        out, _ = self.lstm(x)
        out = self.linear(out[:, -1, :])
        return out