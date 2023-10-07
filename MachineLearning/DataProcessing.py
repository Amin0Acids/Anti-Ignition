import DataFetch as df
import matplotlib.pyplot as plt
import pandas as pd

data = pd.read_csv('VIIRS_SNPP_NRT.csv')
x = data['longitude']
y = data['latitude']
z = data[['bright_ti4']]  # , 'bright_ti5'
print(z)
maxv = 0
z = z.to_numpy()
for i in range(len(z)):
    if z[i] > maxv:
        maxv = z[i]

for i in range(len(z)):
    z[i] = z[i] / maxv

print(z)

plt.scatter(x, y, s=1, c=z, cmap='hsv')
