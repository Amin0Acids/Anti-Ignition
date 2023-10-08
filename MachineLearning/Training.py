import torch
import torch.nn as nn
import ModelSaveAndLoad as msal

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


def train(model, optimizer, x_train, y_train, num_epochs, batch_size):
    criterion = nn.CrossEntropyLoss()
    n_total_steps = num_epochs
    for epoch in range(num_epochs):
        x_train = x_train.to(device)
        y_train = y_train.to(device)

        # forward pass
        outputs = model(x_train)
        loss = criterion(outputs, y_train)

        # backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        if (epoch+1)%100 == 0:
            print(f'epoch {epoch+1}/{num_epochs}, step {epoch+1}/{n_total_steps}, loss = {loss.item():.4f}')

    msal.saveTrainingProgress(model, optimizer, num_epochs)
    if device == torch.device('cuda'):
        msal.saveModelGPU(model)
    else:
        msal.saveModelCPU(model)
    print('Finished Training')
    return model, optimizer
