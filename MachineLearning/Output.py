import torch

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


def result(model, output_loader):
    r = torch.tensor([])
    with torch.no_grad():
        for images in enumerate(output_loader):
            images = images.to(device)
            outputs = model(images)
            _, predicted = torch.max(outputs, 1)
            r = torch.cat((r, predicted), 0) # check

        return r


def testModel(model, x_test, y_test):
    with torch.no_grad():
        n_correct = 0
        n_samples = 0
        for i, in x_test:
            x_test = x_test.to(device)
            y_test = y_test.to(device)

            outputs = model(x_test)

            _, predicted = torch.max(outputs, 1)

            n_samples += y_test.shape[0]
            n_correct += (y_test == predicted).sum().item()

        acc = 100.0 * n_correct / n_samples
        print(f'accuracy = {acc}')
        return acc/100
