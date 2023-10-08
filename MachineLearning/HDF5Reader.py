import torch
import numpy as np
import h5py
import os
import tables
import matplotlib.pyplot as plt

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

direc = '/Users/lfy/Documents/liufy/code/Aminoacid/October 2023/soil moisture data'
dirs = os.listdir(direc)


def getData():
    moistureArr = np.array([], dtype=np.float32)
    dataset1 = np.array([], dtype=np.float32)
    dataset2 = np.array([], dtype=np.float32)

    f = h5py.File(tables.open_file(os.path.join(direc, dirs[0])).filename)

    print(np.array(f.get('Soil_Moisture_Retrieval_Data')))

    moistureA = np.array(f.get('Soil_Moisture_Retrieval_Data').get('soil_moisture'), dtype=np.float32)
    data = np.array(f.get('Soil_Moisture_Retrieval_Data').get('latitude'), dtype=np.float32)
    data2 = np.array(f.get('Soil_Moisture_Retrieval_Data').get('longitude'), dtype=np.float32)
    date = np.array(f.get('Soil_Moisture_Retrieval_Data').get('tb_time_utc'))
    print(date)
    # x = len(moistureA)
    # i = 0
    # while i < x:
    #     if moistureA[i] <= -9990:
    #         moistureA = np.delete(moistureA, i)
    #         data = np.delete(data, i)
    #         data2 = np.delete(data2, i)
    #         x -= 1
    #     else:
    #         i += 1

    # plt.scatter(data2, data, c=moistureA, cmap='Greys')

    for idir in dirs:
        f = h5py.File(tables.open_file(os.path.join(direc, idir)).filename)
        # print(np.array(f.get('Soil_Moisture_Retrieval_Data')))
        moistureA = np.array(f.get('Soil_Moisture_Retrieval_Data').get('soil_moisture'), dtype=np.float32)
        data = np.array(f.get('Soil_Moisture_Retrieval_Data').get('latitude'), dtype=np.float32)
        data2 = np.array(f.get('Soil_Moisture_Retrieval_Data').get('longitude'), dtype=np.float32)
        # data3 = f.get('Soil_Moisture_Retrieval_Data'.get(''))
        print(data2.size)
        x = len(moistureA)
        i = 0
        while i < x:
            if moistureA[i] <= -9990:
                moistureA = np.delete(moistureA, i)
                data = np.delete(data, i)
                data2 = np.delete(data2, i)
                x -= 1
            else:
                i += 1
        print(moistureA)
        print(moistureA.size)
        print(data.size)
        print(data2.size)
        dataset1 = np.concatenate((dataset1, data))
        dataset2 = np.concatenate((dataset2, data2))
        moistureArr = np.concatenate((moistureArr, moistureA))
        f.close()

    plt.scatter(dataset2, dataset1, c=moistureArr, cmap='hsv')
    return dataset2, dataset1, moistureArr
