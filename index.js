function isPalindrome(word) {
  // Write your algorithm here
  const letterArray = word.split('');
  const reverseLetters = letterArray.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }

}

/* 
  Add your pseudocode here
 1) Give a variable name to array of letters by use of (.split) to split each letter into array.
 2) Give a variable to letters from in a reverse way by use of (.reverse)
 3) Give a variable to string in a reverse way and use (.join) to cause the reverse.
 4) Use the if-else condition to solve the problem
*/

/*
  Add written explanation of your solution here
  -The function takes the word and splits each letter into an array, then the array is reversed.
  -The array is then joined again into a word. Then we compare if the orginal word is the same as the reversed word.
  -If true then it returns true, or else it will return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('boy'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
