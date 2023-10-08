# This is a sample Python script.
import DataFetch as df
import HDF5Reader as hr
import torch
import Model as m
import Training as t

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # dataset_x, dataset_y, dataset_data = hr.getData()
    # dataset_x = torch.from_numpy(dataset_x)
    # dataset_y = torch.from_numpy(dataset_y)
    # dataset_data = torch.from_numpy(dataset_data)
    dataset_x = torch.tensor([1, 2, 3, 4, 5])
    dataset_y = torch.tensor([1, 2, 3, 4, 5])
    dataset_data = torch.tensor([1, 2, 3, 4, 5])
    x_dataset = torch.stack((dataset_x, dataset_y, dataset_data))
    print(x_dataset)
    print(x_dataset.shape)

    # training code
    input_size = 784
    hidden_size = 100
    num_classes = 10
    num_epochs = 2
    batch_size = 100
    learning_rate = 0.01

    model = m.NeuralNet(input_size, hidden_size, num_classes)
    optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)
    t.train(model, optimizer, x_dataset, y_dataset, num_epochs, batch_size)
    # data output code

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
