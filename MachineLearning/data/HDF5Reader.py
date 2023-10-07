# This is a sample Python script.
import torch
import numpy as np
import h5py
import os
import tables
import matplotlib.pyplot as plt

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

matrix1 = np.random.random(size=(1000, 1000))

# with h5py.File("/Users/jliu61/Documents/SoilSet/SMAP_L2_SM_P_NRT_46145_A_20230921T175127_N17701_002.h5", 'r') as hdf:
#     ls = list(hdf.keys())
#     print('list of datasets', ls)
#     data = hdf.get('Soil_Moisture_Retrieval_Data').get('latitude')
#     print(np.array(hdf.get('Soil_Moisture_Retrieval_Data')))
#
#     dataset1 = np.array(data)
#     print(dataset1[0])
#
# f = h5py.File('/Users/jliu61/Documents/SoilSet/SMAP_L2_SM_P_NRT_46144_D_20230921T170212_N17701_003.h5')
# ls = list(f.keys())
# moistureArr = np.array(f.get('Soil_Moisture_Retrieval_Data').get('soil_moisture'))
# data = f.get('Soil_Moisture_Retrieval_Data').get('latitude')
# data2 = f.get('Soil_Moisture_Retrieval_Data').get('longitude')
# # data3 = f.get('Soil_Moisture_Retrieval_Data'.get(''))
# dataset1 = np.array(data)
# dataset2 = np.array(data2)
# for i in moistureArr:
#     if i != -9999:
#         print(i)
# f.close()

direc = '/Users/jliu61/Documents/SoilSet/'
dirs = os.listdir(direc)

for idir in dirs:
    if idir.endswith('.h5'):
        f = h5py.File(tables.open_file(os.path.join(direc, idir)).filename)
        # f = h5py.File('/Users/jliu61/Documents/SoilSet/SMAP_L2_SM_P_NRT_46305_A_20231002T162528_N17701_001.h5')
        ls = list(f.keys())
        # print(np.array(f.get('Soil_Moisture_Retrieval_Data')))
        moistureArr = np.array(f.get('Soil_Moisture_Retrieval_Data').get('soil_moisture'))
        data = f.get('Soil_Moisture_Retrieval_Data').get('latitude')
        data2 = f.get('Soil_Moisture_Retrieval_Data').get('longitude')
        # data3 = f.get('Soil_Moisture_Retrieval_Data'.get(''))
        dataset1 = np.array(data)
        dataset2 = np.array(data2)
        # plt.scatter(dataset2, dataset1, c=moistureArr, cmap='gray')
        # for i in range(len(moistureArr)):
        #     if moistureArr[i] != -9999:
        #         print(dataset1[i])
        #         print(dataset2[i])
        #         print(moistureArr[i])
        f.close()

# def print_hi(name):
#     # Use a breakpoint in the code line below to debug your script.
#     print(f'Hi, {name}')  # Press ⌘F8 to toggle the breakpoint.
#
#
# # Press the green button in the gutter to run the script.
# if __name__ == '__main__':
#     x = torch.randn(3, 3, 3)
#     print(x)

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
