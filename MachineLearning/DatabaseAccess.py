import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="userp",
    password="4nn1n04c1d5",
    database="AntiIgnition"
)

myCursor = mydb.cursor()


def insertData(data):
    sql = "INSERT INTO Coordinate (latitude, longitude, risk) VALUES (%f, %f, %f)"
    val = data
    myCursor.execute(sql, val)
    mydb.commit()


def insertDataMatrix(data):
    for i in range(len(data)):
        insertData(data[i])
