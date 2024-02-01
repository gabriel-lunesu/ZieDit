#import pytest
from app import *

# HelloWorld = {
#     "a": ".", "b": "Exeption Caught",
#     "result": "Exeption Caught"
#     #"hi", ".", "Exeption Caught"
# }
# SignUp = {
#     "Lars Peuling"," ", "Exeption Caught"
#     "Gabriel Lunesu"," ", "Exeption Caught"
#     "Yassin Leclaire"," ", "Exeption Caught"
# }
# LogInUser = {
#     "Lars Peuling"," ", "Exeption Caught"
#     "Gabriel Lunesu"," ", "Exeption Caught"
#     "Yassin Leclaire"," ", "Exeption Caught"
#     "1,"," ", "Exeption Caught"
#     "^"," ", "Exeption Caught"
# }
# CreateEvent = {
#     "Yoga Class"," ", "Wrong input type"
#     "Gym Class"," ", "Wrong input type"
#     "^"," ", "Wrong input type"
#     "@#$%^&*()"," ", "Wrong input type"
# }
# GetEvents = {
#     "All"," ", "Wrong input type"
#     "None"," ", "Wrong input type"
#     "!@#$%^&*()_"," ", "Wrong input type"
#     "6"," ", "Wrong input type"
# }
# GetEvent = {
#     "UserName"," ", "Wrong input type"
#     "Funny stuff"," ", "Wrong input type"
#     "$%^&*()(*&^%$#)"," ", "Wrong input type"
#     "Genesis 6:6"," ", "Wrong input type"
# }
# UpdateEvent = {
#     "Yoga Class"," ", "Exception Caught"
#     "Gym Class"," ", "Exception Caught"
#     "^"," ", "Exception Caught"
#     "!@#$%^&*()(*&^%$#@#$%^&)"," ", "Exception Caught"
# }

# @pytest.mark.parametrize("a,b,result", HelloWorld)
# def test_hello_world(a,b,result):
#     assert hello_world(a,b) == result
    
# @pytest.mark.parametrize("a,result", SignUp)
# def test_signup(a,result):
#     assert signup(a) == result
    
# @pytest.mark.parametrize("a,result", LogInUser)    
# def test_login_user(a,result):
#     assert login_user(a) == result
 
# @pytest.mark.parametrize("a,result", CreateEvent)    
# def test_create_event(a,result):
#     assert create_event(a) == result
    
# @pytest.mark.parametrize("a, result", GetEvents)
# def test_get_events(a,result):
#     assert get_events(a) == result

# @pytest.mark.parametrize("a,result", GetEvent)    
# def test_get_event(a,result):
#     assert get_event(a) == result
    
# @pytest.mark.parametrize("a,result", UpdateEvent)
# def test_update_event(a,result):
#     assert update_event(a) == result


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
