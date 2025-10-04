// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  //calculate the average, add up all the numbers and divide by the total amount of numbers 
  let sumOfClassPoints = 0
  for(let i = 0; i < classPoints.length;i++){
    
        sumOfClassPoints += classPoints[i]
  }
  //add your points to the average 
   let totalPoints = sumOfClassPoints + yourPoints
   //total number of stuents 
   let totalStudents = classPoints.length + 1
   //find the average
   let average = totalPoints / totalStudents
 
  return yourPoints > average;
}

console.log(betterThanAverage([2, 3], 5))

//this has not been uploaded yet