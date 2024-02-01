from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from models import db, User, Event
import uuid
from datetime import datetime
 
app = Flask(__name__)
# Enable CORS for all routes
CORS(app)

# Configuration for Flask app 
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

# Initialize Bcrypt and SQLAlchemy with the app  
bcrypt = Bcrypt(app) 
db.init_app(app)

# Create tables in the database  
with app.app_context():
    db.create_all()

#Hello World Function 
@app.route("/")
def hello_world():
  try:
    return "Hello, World!"
 
@app.route("/signup", methods=["POST"])
def signup():
  try:
    email = request.json["email"]
    password = request.json["password"]
 
    user_exists = User.query.filter_by(email=email).first() is not None
 
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
     
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
 
    session["user_id"] = new_user.id
 
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
  except Exception:
    return ("Exeption Caught")

# User login endpoint
# Query user by email
# Check if the password is correct 
@app.route("/login", methods=["POST"])
def login_user():
    try:
      email = request.json["email"]
      password = request.json["password"]
  
      user = User.query.filter_by(email=email).first()
  
      if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
  
      if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
      session["user_id"] = user.id
  
      return jsonify({
        "id": user.id,
        "email": user.email
      })
    except Exception:
      return ("Exeption Caught")

# Create event endpoint
# Create a new event
@app.route("/events", methods=["POST"])  
def create_event():
  try:
    
    eventName = request.json['eventName']
    eventDesc = request.json['eventDesc']
    eventDate = request.json['eventDate']

  

    new_event = Event(eventName=eventName, eventDesc=eventDesc, eventDate=eventDate)


    db.session.add(new_event)
    db.session.commit()
  
    return jsonify({
      "id": new_event.id,
      "name": new_event.eventName,
      "desc": new_event.eventDesc,
      "date": new_event.eventDate
    })
  except Exception:
    return ("Wrong input type")

# Get all events endpoint
# Format events for response
@app.route("/events", methods=["GET"])  
def get_events():
  try:
    events = Event.query.all()
  
    events_list = []
  
    for event in events:
      events_list.append({
      "id": event.id,
      "eventName": event.eventName,
      "eventDesc": event.eventDesc,
      "eventDate": event.eventDate
      })

    return jsonify(events_list)
  except Exception:
    return ("Wrong input type")
  
# Get a specific event by ID endpoint
@app.route('/events/<id>', methods=['GET'])
def get_event(id):
  try:
    event = Event.query.get(id)

    response = {
      "id": event.id,
      "eventName": event.eventName,
      "eventDesc": event.eventDesc,
      "eventDate": event.eventDate
    }

    return jsonify(response), 200
  except Exception:
    return ("Event not found!")

# Update a specific event by ID endpoint
@app.route('/events/<id>', methods=['PUT'])
def update_event(id):
  try:
    data = request.get_json()

    event = Event.query.get(id)

    event.eventName = data['eventName']
    event.eventDesc = data['eventDesc'] 
    event.eventDate = data['eventDate']
  
    db.session.commit()

    updated_event = Event.query.get(id)

    response = {
      "id": updated_event.id,
      "eventName": updated_event.eventName,
      "eventDesc": updated_event.eventDesc,  
      "eventDate": updated_event.eventDate
    }

    return jsonify(response)
  except Exception:
    return ("Exception Caught")

  



with app.app_context():
    db.drop_all()
    db.create_all()
 
if __name__ == "__main__":
    app.run(debug=True)