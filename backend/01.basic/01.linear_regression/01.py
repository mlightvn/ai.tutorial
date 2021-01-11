# Giá nhà

import matplotlib.pyplot as pl
import numpy as np
from sklearn import linear_model

data = np.array([
		[100, 1.0],
		[200, 2.2],
		[300, 2.7],
		[400, 3.9],
		[500, 5.6],
		[600, 7.0],
		[800, 7.2],
	])

size = data[:,0]
price = data[:,1] # Billion VND

pl.xlabel("Diện tích : m2")
pl.ylabel("Tỷ VND")

pl.scatter(size, price, color="blue")

regr = linear_model.LinearRegression()
regr.fit(size.reshape(-1, 1), price)

pl.plot(size, regr.predict(size.reshape(-1, 1)), color = "green")


pl.show()

size_prediction = [50, 150, 320] # met vuông
print("Tỷ VND:")
for new_size in size_prediction:
	print(regr.predict([[new_size]]))



# pl.show()
