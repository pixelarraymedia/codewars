// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.





//Array, Names, not null
//Check the index of array for a count of likers
//return names 

const likes = (names, likers = names.length) =>
likers < 1 ? 'no one likes this' :
likers < 2 ? `${names[0]} likes this` : 
likers < 3 ? `${names[0]} and ${names[1]} like this` :
likers < 4 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 
            `${names[0]}, ${names[1]} and ${likers - 2 } others like this`