# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: a parameter is the value of an object, the index and the array you are performing a the function on. while an argument is the action of what you would like the output to return.

Researched answer: A parameter is a variable that has been given a name and passed through into a function as "placeholder" The argument is the actual value of an object or array that the function will run actions on.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: the built in method .map () uses the parameters value,index, and the array. The optional predefined parameters that are optional are the index and array.

Researched answer: The built in method .map will require the current value, the index and the higher order function that an array is called on but only the value of the array at the current iteration is required. 

3. What is the difference between map and filter?

Your answer: . map() is used to take a value in a function that has an array and returns a new array with the value of the return requested. . filter() is designed to take a conditional statement on on a function with an array and return the specific response to the conditional statement. 

Researched answer: . map() will return each value of an array within a new array, based on the return action requested. for example if .map() was used to find the multiple of 3 in an array of const myArray = [4,7,9,11]

const multiplier = myArray.map((value) => {
  return value  3 % 3 === 0
})

while .filter() returns the output of a conditional statement narrowing down to more specific values such as returning the value at index 3.

1. What is iteration?

Your answer: The constant running of a function by the terminal based on parameters given to return a desire outcome.

Researched answer: Iteration is the protocol that runs the code to the next operator to return a value or true / false response.

1. What is the difference between a function and a method?

Your answer: A function is code that performs an action to determine a given value. a method holds the property of an object that is read by the function.

Researched answer: Statements that calculate a value and return an output based upon the information given that relates the input to the output. While a method contains a function definition but is actually an object property.

6. STRETCH: What is hoisting in JavaScript?

Your answer: moves a function above other code. 

Researched answer: causes the interpreter to have the appearance of moving a function declaration, class or variables to the top of their code before it runs.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: Are a template for creating objects. contain data with code, they have unique syntax.

2. Spread operator: a tool to make deep copies of Javaascript object.

3. React state: a Built - in React Object used to contain information or data about a component.

4. React props: an object type that stores the value of attributes of a tag

5. DOM events: Reactions to an element or webpage function causing the page to indicate something was selected or changed.
