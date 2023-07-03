// DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// String, names, 
// Array, names with 4 letters

function friend(friends){
    // initialize array
    let result = []
    
      for (let i = 0; i < friends.length; i++)
        {
          // store names in index
          if (friends[i].length == 4 )
            {
              result.push(friends[i])
            }
        
        }
    return result 
  }
  // faster program
  const friend = friends => friends.filter(element => element.length == 4 )
  // using filter we check if  the array is equal to 4