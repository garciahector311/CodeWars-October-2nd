//Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :) 
 //first grab the first index [0] and store it in a variable 
  let getString = inputString[0]
  //convert it into a number using one of these 3 ways 
  //const intiger = parseInt(getString, 10)<--option 1
  //const intiger = Number(getString)<--- option 2
  const intiger = +getString//<---option 3
  
  return intiger
  }
  


console.log(getAge("4 years old"))