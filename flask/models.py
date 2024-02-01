from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, Date
from datetime import datetime
from uuid import uuid4

# Create an instance of SQLAlchemy 
db = SQLAlchemy()

# Function to generate a UUID 
def get_uuid():
    return uuid4().hex

# User model representing the 'users' table in the database 
class User(db.Model):
    __tablename__ = "users" # Table name
    # Columns
    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)

# Event model representing the 'events' table in the database
class Event(db.Model):
    __tablename__ = "events" # Table name
    # Columns
    id = db.Column(db.String, primary_key=True, default=get_uuid) 
    eventName = db.Column(db.String, nullable=False, unique=True)
    eventDesc = db.Column(db.String)
    eventDate = db.Column(db.String)



   


