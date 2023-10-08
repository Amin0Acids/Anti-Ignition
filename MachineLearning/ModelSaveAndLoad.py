import torch

modelPath = 'model.pth'
trainingPath = 'training.pth'


def saveModel(model):
    torch.save(model.state_dict(), modelPath)


def loadModel(model):
    model.load_state_dict(torch.load(modelPath))
    model.eval()
    return model


def saveModelGPU(model):
    device = torch.device('cuda')
    model.to(device)
    torch.save(model.state_dict(), modelPath)


def loadModelGPU(model):
    device = torch.device('cuda')
    model.load_state_dict(torch.load(modelPath, map_location="cuda:0"))
    model.to(device)
    model.eval()
    return model


def saveModelCPU(model):
    saveModel(model)


def loadModelCPU(model):
    device = torch.device('cpu')
    model.load_state_dict(torch.load(modelPath, map_location=device))
    model.eval()
    return model


def saveTrainingProgress(model, optimizer, epoch):
    torch.save({
        'epoch': epoch,
        'model_state_dict': model.state_dict(),
        'optimizer_state_dict': optimizer.state_dict()
    }, trainingPath)


def loadTrainingProgress(model, optimizer):
    checkpoint = torch.load(trainingPath)
    model.load_state_dict(checkpoint['model_state_dict'])
    optimizer.load_state_dict(checkpoint['optimizer_state_dict'])
    epoch = checkpoint['epoch'] + 1
    return model, optimizer, epoch
