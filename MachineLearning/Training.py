import torch
import torch.nn as nn
import ModelSaveAndLoad as msal

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


def train(model, optimizer, train_loader, num_epochs, batch_size):
    criterion = nn.CrossEntropyLoss()
    n_total_steps = len(train_loader)
    for epoch in range(num_epochs):
        for i, (images, labels) in enumerate(train_loader):
            images = images.to(device)
            labels = labels.to(device)

            # forward pass
            outputs = model(images)
            loss = criterion(outputs, labels)

            # backward pass
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            if (i+1)%100 == 0:
                print(f'epoch {epoch+1}/{num_epochs}, step {i+1}/{n_total_steps}, loss = {loss.item():.4f}')

    msal.saveTrainingProgress(model, optimizer, num_epochs)
    if device == torch.device('cuda'):
        msal.saveModelGPU(model)
    else:
        msal.saveModelCPU(model)
    print('Finished Training')
    return model, optimizer
