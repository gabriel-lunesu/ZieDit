from app import *

def test_hello_world():
    assert hello_world() == "Hello, World!"
    
def test_signup():
    assert signup() == "Exeption Caught"
    
def test_login_user():
    assert login_user() == "Exeption Caught"
    
def test_create_event():
    assert create_event() == "Wrong input type"
    
def test_get_events():
    assert get_events() == "Wrong input type"
    
def test_get_event():
    assert get_event("1") == "Wrong input type"
    
def test_update_event():
    assert update_event("1") == "Exception Caught"


