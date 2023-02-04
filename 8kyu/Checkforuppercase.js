// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
// String
// console log, plays banjo, doesnt play banjo

//areYouPlayingBanjo = name => name + (name.match(/^r/i) ? ' plays banjo' : ' does not play banjo')

function areYouPlayingBanjo(name)
// Loop
// check for uppercase
{
  if (name[0].toLowerCase() === 'r')
  {
    return name + ' plays banjo';
  } else {
     return name + ' does not play banjo';
  }
}