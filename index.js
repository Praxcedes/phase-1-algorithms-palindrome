function isPalindrome(word) {
  // Reverse the word and check if it's equal to the original
  return word === word.split('').reverse().join('');
}

// export the function so the test file can import it
module.exports = isPalindrome;

  // Write your algorithm here


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


