from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from uuid import uuid4

 
db = SQLAlchemy()
 
def get_uuid():
    return uuid4().hex
 
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)

class Event(db.Model):
    __tablename__ = "events"
    id = db.Column(db.String, primary_key=True, default=get_uuid) 
    eventName = db.Column(db.String, nullable=False)
    eventDate = db.Column(db.DateTime, default=datetime.utcnow)



   


