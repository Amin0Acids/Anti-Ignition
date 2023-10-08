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


def testModel(model, test_loader):
    with torch.no_grad():
        n_correct = 0
        n_samples = 0
        for i, (images, labels) in enumerate(test_loader):
            images = images.to(device)
            labels = labels.to(device)

            outputs = model(images)

            _, predicted = torch.max(outputs, 1)

            n_samples += labels.shape[0]
            n_correct += (labels == predicted).sum().item()

        acc = 100.0 * n_correct / n_samples
        print(f'accuracy = {acc}')
        return acc/100
