# scripts/inspect_model.py
import torch
import os

# Get the current script directory
script_dir = os.path.dirname(os.path.abspath(__file__))
model_dir = os.path.join(script_dir, '..', 'model')
model_path = os.path.join(model_dir, 'eth_price_model.pth')

# Load the model
state_dict = torch.load(model_path, map_location=torch.device('cpu'))

print("Model keys in state_dict:")
for key in state_dict.keys():
    print(f"- {key}: {state_dict[key].shape}")

print("\nModel architecture analysis:")
# Try to infer the architecture from the state_dict
lstm_layers = 0
linear_layers = 0

for key in state_dict.keys():
    if 'lstm' in key:
        lstm_layers += 1
    if 'linear' in key:
        linear_layers += 1

print(f"LSTM layers: {lstm_layers//4}")  # Each LSTM layer has 4 parameter sets
print(f"Linear layers: {linear_layers//2}")  # Each linear layer has 2 parameter sets

# Try to infer hidden size from the weights
if 'lstm.weight_ih_l0' in state_dict:
    hidden_size = state_dict['lstm.weight_ih_l0'].shape[0] // 4
    print(f"Hidden size: {hidden_size}")