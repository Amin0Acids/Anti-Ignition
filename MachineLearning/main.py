# This is a sample Python script.
import DataFetch as df
import HDF5Reader as hr
import torch
import Model as m
import Training as t
import DataProcessing as dp
import Output as o
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import numpy as np

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    dataset_x, dataset_y, dataset_data = hr.getData()
    dataset_x = torch.from_numpy(dataset_x)
    dataset_y = torch.from_numpy(dataset_y)
    dataset_data = torch.from_numpy(dataset_data)
    # dataset_x = torch.tensor([1, 2, 3, 4, 5])
    # dataset_y = torch.tensor([1, 2, 3, 4, 5])
    # dataset_data = torch.tensor([1, 2, 3, 4, 5])
    x_dataset = torch.stack((dataset_x, dataset_y, dataset_data))
    y_dataset = dp.getYData()
    print(x_dataset)
    print(x_dataset.shape)
    n_sample = x_dataset.shape[0]
    n_feature = x_dataset.shape[1]

    x_dataset = x_dataset.numpy()
    y_dataset = y_dataset.numpy()

    x_dataset_train, x_dataset_test, y_dataset_train, y_dataset_test = train_test_split(x_dataset, y_dataset, test_size=0.2, random_state=1234)
    sc = StandardScaler()
    x_dataset_train = sc.fit_transform(x_dataset_train)
    x_dataset_test = sc.transform(x_dataset_test)

    x_dataset_train = torch.from_numpy(x_dataset_train.astype(np.float32))
    x_dataset_test = torch.from_numpy(x_dataset_test.astype(np.float32))
    y_dataset_train = torch.from_numpy(y_dataset_train.astype(np.float32))
    y_dataset_test = torch.from_numpy(y_dataset_test.astype(np.float32))

    # training code
    input_size = n_feature
    hidden_size = 100
    num_classes = 10
    num_epochs = 5
    batch_size = 100
    learning_rate = 0.01

    model = m.NeuralNet(input_size, hidden_size, num_classes)
    optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)
    t.train(model, optimizer, x_dataset_train, y_dataset_train, num_epochs, batch_size)
    accuracy = o.testModel(model, x_dataset_test, y_dataset_test)
    print("accuracy: ", accuracy)
    # data output code

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
