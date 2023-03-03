// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: Each letter in the string will be separated into their own string. "A" "l""p""h""a" "2" "0""2""3"
// b) Verify and explain: Returned: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '3'] The method .split("") separates each charactr inside of a string and puts it into an array as a single value. with .join() they can be put back together to return a single string again. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Undefined, There is no return statement set for the termianl to return an output
// b) Verify and explain: undefined, there was no return statement for the code to know there is an output wanted.


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: Each number in the array will be multiplied by 2 [8,10,12,14,16]
// b) Verify and explain:[ 8, 10, 12, 14, 16 ] An array of all numbers multiplied by 2, because the .map() method ran each array number through the * 2 action and returned them.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: It will return all of the odd numbers in the Array [11,13,15]
// b) Verify and explain: [ 11, 13, 15 ] an array of only odd numbers due to the bang sign instead of looking for numbers evenly divisible it returned all numbers not evenly divisible by 2 (Odd numbers).

// --------------------5) What will this log?

// const myCodingSkills = {
  // languages: ["JavaScript", "Ruby"],
  // frameworks: ["React", "Ruby on Rails"],
  // databases: "PostgreSQL",
  // versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: This will return the 0 index for each object's key [J],[R][P][G]
// b) Verify and explain: JavaScript, the entire first word in the string was returned. The string at the 0 index was returned. Becuase the .languages[0] method action is asking for the coding language at the 0 index of the array and "Javascript" is in the 0 place point.
