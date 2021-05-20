
// dummy function for testing to see if buttons are working needs to be removed after testing
function myFunction() {
  alert('i am wokring')
}

// array of choices that will be compared to the random number generated 
let choices = [1, 2, 3, 4, 5]

// decalred variable to allow of comparisons in multiple functions
let answer;

// function that generates and console logs a number between 1 and 5
function numberGeneration() {
 answer = Math.floor(Math.random() * (5) + 1)
 console.log(answer)
 return answer
}

// function to compare number gmerated and number selected
// currently not working more than once and hard code value for testing
function picker (){
 if (answer === 1){
   console.log('winner')
 }
  
}

// calling the functions
// should be changed to recursivly call the fucntions where appropriate
picker();
numberGeneration();
