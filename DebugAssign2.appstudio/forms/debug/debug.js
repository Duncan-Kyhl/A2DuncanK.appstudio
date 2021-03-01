/*
ADD ARRAYS AND SOME ARRAY METHODS - .LENGTH, POP, PUSH

This program gets the user name and age, then outputs a nice, appropriate 
message to the user based on their age. It also sees if the users' name is in the 
friends array. 
*/

let friends = ["Michelle", "Betty", "Bev", "Amy", "Marsha"]
let decades = ['twenties']
let choice = prompt(`I have ${friends.length} friends. Which of my friends do you want to invite over? ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, or ${friends[4]}?`)

let userName = prompt("Enter your first name please. ")
let userAge = prompt("Enter your current age in years. ")

if (userAge > 20) {
    messageNum = 1
} else if (userAge > 30 && userAge < 40) {
    messageNum = 2
} else if (userAge > 40) {
    messageNum = 3
}

decades.push('thirties')

switch (messageNum) {
  case 1:
      alert(`You are in your ${decades[messageNum-1]}!`)
      break;
  case 2:
      alert(`You are in your ${decades[messageNum-1]}!`)
      break;
  case 3:
      alert("You are over 40! Wow!")
      break;
  default:
      alert("I have no idea how old you are.")
      break;
}
