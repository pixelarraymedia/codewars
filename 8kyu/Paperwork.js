// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// Write a function that calculate number of blank pages needed
// If 0 classmates and 0 paperworks return 0
// Multiply classmates(N) and paperworks(M) to get result

function paperwork(n, m) {
    if ( n < 0 || m < 0)
      {
      return 0;
  } else
    {
      return n*m;
    }
    
    }
  
    // function paperwork(n, m) {
    //     return n < 0 && m < 0 ? n * m : 0
    //   }

    // function paperwork(n, m) {
    //     if (n <= 0 || m <= 0) {
    //     var pages = 0;
    //     } else pages = n * m;
    //     return pages;
    //   }