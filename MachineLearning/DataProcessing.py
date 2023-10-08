import numpy as np

import DataFetch as df
import matplotlib.pyplot as plt
import pandas as pd

c = {'l': 1, 'n': 2, 'h': 3}

data = pd.read_csv('data/VIIRS_SNPP_NRT.csv')
x = data['longitude']
y = data['latitude']
z = data[['bright_ti4']]  # , 'bright_ti5'
a = data['confidence'].map(c)

# print(a)
maxv = 0
x = x.to_numpy()
y = y.to_numpy()
z = z.to_numpy()
for i in range(len(z)):
    x[i] = int(round(x[i]))
    y[i] = int(round(y[i]))
    # if z[i] > maxv:
    #     maxv = z[i]

# for i in range(len(z)):
#     z[i] = z[i] / maxv

temp = [[0] * 180] * 360
for i in range(len(x)):
    print(x[i], y[i])
    temp[int(x[i])][int(y[i])] += z[i].item() * a[i].item()

plt.scatter(x, y, s=1, c=temp, cmap='hsv')