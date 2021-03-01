/*
ADD ARRAYS AND SOME ARRAY METHODS - .LENGTH, POP, PUSH

This program gets the user name and age, then outputs a nice, appropriate 
message to the user based on their age. It also sees if the users' name is in the 
friends array. 
*/

let friends = ["Michelle", "Betty", "Bev", "Amy","Marsha"]
let choice= prompt(`Which of my friends do you want to invite over? ${friends[1]}, ${friends[2]}, ${friends[3]}, ${friends[4]}, or ${friends[5]}?`)

let userName = prompt("Enter your first name please. ")
let userAge = prompt("Enter your current age in years. ")

if age > 20
    messageNum = 1
else if age > 30 AND < 40
    messageNum = 2
else
    messageNum = 3
    
swich (messagenum) {
case '1':
    alert("You are in your twenties!")
    break
case '2':
    alet("You are in your thirties! ")
case '3':
    alert("You are over 40! Wow!)
    break
default:
    alert("I have no idea how old you are. ")
