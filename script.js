function myFunction() {
  alert('i am wokring')
}

// let option1 = Math.floor(Math.random() * (5 - 1) + 1)
// let option2 = Math.floor(Math.random() * (5 - 1) + 1)
// let option3 = Math.floor(Math.random() * (5 - 1) + 1)
// let option4 = Math.floor(Math.random() * (5 - 1) + 1)
// let option5 = Math.floor(Math.random() * (5 - 1) + 1)

// function beginGame() {
//   option1 = Math.floor(Math.random() * (5 - 1) + 1);
//   option2 = Math.floor(Math.random() * (5 - 1) + 1);
//   option3 = Math.floor(Math.random() * (5 - 1) + 1);
//   option4 = Math.floor(Math.random() * (5 - 1) + 1);
//   option5 = Math.floor(Math.random() * (5 - 1) + 1)
// }

let choices = [1, 2, 3, 4, 5]

let gen = function numberGeneration() {
  Math.floor(Math.random() * (5 - 1) + 1)
}

function picker (){
 console.log(choices.map(gen))
}

picker();