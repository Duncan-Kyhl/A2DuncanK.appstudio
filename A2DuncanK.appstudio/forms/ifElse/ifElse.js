// Using If ... Else 

// get values from user
let firstName = prompt("Please enter your first name:")
let stateAbbr = prompt("Please enter the two letter abbreviation for the state in which you are currently located (ex: NE for Nebraska):")
let tempF = prompt("Please enter the current temperature outside in degrees Fahrenheit:")

// set messages
const messages = [
  "wear a warm coat, hat, scarf and gloves.",
  "wear a warm coat but you won't need a hat, scarf or gloves.",
  "wear your warmest coat, a warm hat, a scarf, and warm gloves.",
  "wear a warm coat, hat and gloves. Maybe a scarf too."
  ]

// if temperature is not below 32, check if below 50, then 70
if (tempF < 32) {
    console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[0]}`)
} else if (tempF < 50) {
    // check state
    if (stateAbbr == 'NE') {
        console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[1]}`)
    } else if (stateAbbr == 'FL') {
        console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[2]}`)
    }
} else if (tempF < 70) {
     console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[3]}`)
}