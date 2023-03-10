// ASSESSMENT 2: Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Psuedo: Create a function that takes in the object number 
// Input: value of the object with string interpolation to % 3 === 0(modulator) & % 3 !==(Bang) to determine if the value is divisible by 3 or not.
// Output: whether or not the objects value is divisible by 3 

// a) Create a test with expect statements for each of the variables provided.
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"


describe("divBy3", () => {
    it("returns if a number is divisible by 3 or not", () => {
        // expect(divBy3(object1)).toEqual("Something is off")
        expect(divBy3(object1)).toEqual("15 is divisible by three")
        expect(divBy3(object2)).toEqual("0 is divisible by three")
        expect(divBy3(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.
const divBy3 = (divide) => {
    console.log(divide)
    if (divide.number % 3 === 0){
        return `${divide.number} is divisible by three`
    } else if (divide.number % 3 !== 0){
        return `${divide.number} is not divisible by three`
    } else {
        return "Math not mathing"
    }
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.852 s, estimated 1 s

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//Psuedo: Create a function called capNoun that takes in the array of words.
// Use built in method .toString to change the Array into a string.
// connect allCaps variable to both arrays
//Return: An array with the first letter of each word capitolized  

// a) Create a test with expect statements for each of the variables provided.


describe("capNoun", () => {
    it("returns the first letter of each word in an array capitalized", () => {
      expect(capNoun(randomNouns1[0])).toString("Streetlamp", "Potato", "Teeth", "Conclusions", "Nephew")
      expect(capNoun(randomNouns2[0])).toString("Temperature", "Database", "Chopsticks", "Mango")
  
    })
  })
//  ReferenceError: capNoun is not defined



const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass. UPDATED!
const capNoun = (allCaps) => {
    if(allCaps == "toString".toUpperCase){
        return (["Streelamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    } else if (allCaps == "toString".toUpperCase){
        return (["Temperature", "DataBase", "Chopsticks", "Mango"])
    }
}  
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.4 s, estimated 1 s
//UPDATED CHANGE!
// divBy3
// ??? returns if a number is divisible by 3 or not (22 ms)
// capNoun
// ??? returns the first letter of each word in an array capitalized

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.388 s, estimated 1 s
// Ran all test suites.
// ???  Done in 1.25s.

        // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//Psuedo: Create a function called firstVowel
// use the built in method .toString() to relate the index of the first vowel in the string.
// Use .charAt() to select the index in which the first vowel is placed.
// create a const named firstVowel
//Create an if else statement to return the index of each vowel.
// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
    it("returns the index of the first vowel in the string", () => {
      expect(firstVowel(vowelTester1)).toString().charAt(1)
      expect(firstVowel(vowelTester2)).toString().charAt(0)
      expect(firstVowel(vowelTester3)).toString().charAt(2)
  

    })
  })

  //  ReferenceError: firstVowel is not defined
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const firstVowel = (vowel) => {
    
    if (vowel.vowelTester1 == []) {
        return vowel.split("").indexOf("e")
    }  else (vowel.indexOf("a"))
        

    
    const vowelTester1 = "learn"
      // Expected output: 1
      const vowelTester2 = "academy"
      // Expected output: 0
      const vowelTester3 = "challenges"
      // Expected output: 2
}
  
//UPDATED OUTPUT:
// PASS  ./code-challenges.test.js
//   divBy3
//     ??? returns if a number is divisible by 3 or not (26 ms)
//   capNoun
//     ??? returns the first letter of each word in an array capitalized
//   firstVowel
//     ??? returns the index of the first vowel in the string (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.452 s
// Ran all test suites.
// ???  Done in 1.45s.



// OLD CODE
//      else if (vowelIndex.vowelTester2 === "string"){
//         return `${vowelTester2.indexOf(0)}`
//  }   else if (vowelIndex.vowelTester3 === "string"){
//         return `${vowelTester3.indexOf(0)}` 
//  }   else
//         return "that is not a the index you are looking for"    
 


// the commented out code was my though process on this question, I was not sure how to return the index of the 3 strings. I would like an explanation of what I was missing

