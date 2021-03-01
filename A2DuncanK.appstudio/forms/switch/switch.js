// Switch Case

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
  
// start switch
switch (true) {
    // first case
    case tempF < 32 && stateAbbr == 'NE':
        // print message to console
        console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[0]}`)
        break;
    // second case
    case tempF > 50 && tempF < 70 && stateAbbr == 'FL': 
        console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[3]}`)
        break;
    case tempF >= 32 && tempF < 50 && stateAbbr === 'NE':
        console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[1]}`)
        break;
    case tempF >= 32 && tempF < 50 && stateAbbr === 'FL':
        console.log(`${firstName}, because it's ${tempF} degrees Fahrenheit, you should ${messages[2]}`)
        break;
    default:
}