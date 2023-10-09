# Anti-Ignition

Anti-Ignition is a mobile app created for running data analysis on potential forest fires around the world. Anti-Ignition takes advantage of datasets provided by NASA satellites through VIIRS, MODIS, as well as SMAP data. We created a machine learning model where we trained its neural network to compare the data and locations, creating prediction risk levels off of this. We display these predictions onto a map and the risk level of a location of your choosing, telling you further steps to take based off of your situation.


# How It Works

As it is designed for mobile uses, we used react-native as the main framework for our front end development. We used a SQL database and Pytorch to create and train our machine learning model. We also used Spring as the main framework for our backend. Anti-Ignition is designed so it can gather near real-time data and easily analyze it so our users can have an up to date analysis.

Anti-Ignition takes in data from sources like NASA or APIs like *Geolocation* for gathering current location. The data is then sent to our machine learning model in Pytorch which outputs data to our database like coordinates and their respective risk factors. The goal of this is to eventually send these coordinates via Rest API to the front end, displaying dynamic map pins and markers using the Google Maps API through the react-native-maps library.

# Functionality

Anti-Ignition is designed for forest fire and wildfire prediction on a global level. It's made simple and easy to access with only requiring the press of a single button to see if your area is at risk or not. 

More specifically, the machine learning model is trained using past data on soil moisture, infrared data, vegetation opacity, as well as the levels of gases released from the combustion process. A combination of all these contribute to creating a relationship to past forest fires and risk of fire. The model then looks at the current information for those categories and calculates your risk.

# Contact Us

Feel free to contact liufy520@hotmail.com, liujason6162@gmail.com, leolin.exe@gmail.com, helenyin155@gmail.com or irismo1009@gmail.com for any questions.
