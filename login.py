from flask import Flask, request, render_template, redirect, url_for, session
import os
import sqlite3

currentLocation = os.path.dirname(os.path.abspath(__file__))

myApp = Flask(__name__)\
    
@myApp.route('/')
def Home():
    return render_template('index.html')

@myApp.route('/', methods=['POST'])
def checkLogin():
    userName = request.form['username']
    passWord = request.form['password']
    
    sqlconnection = sqlite3.connect(currentLocation + '/login.db')
    cursor = sqlconnection.cursor()
    query1 = "SELECT username, password FROM users WHERE username = {un} AND password = {pw})".format(un=userName, pw=passWord)
    
    rows = cursor.execute(query1)
    rows = rows.fetchall()
    
    if len(rows) == 1:
        return render_template('dashboard.html', error='Invalid username or password')
    else:
        return render_template('/register.html')
    
@myApp.route('/register', methods=['GET','POST'])
def registerPage():
    if request.method == 'POST':
        dUN = request.form['Dusername']
        dPW = request.form['Dpassword']
        sqlconnection = sqlite3.connect(currentLocation + '/login.db')
        cursor = sqlconnection.cursor()
        query1 = "INSERT INTO users VALUES ({u}, {p})".format(u=dUN, p=dPW)
        cursor.execute(query1)
        sqlconnection.commit()
        return redirect(url_for('/'))
    return render_template('register.html')

if __name__ == '__main__':
    myApp.run(debug=True)
    
