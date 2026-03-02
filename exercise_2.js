//Exercise 2 - Loop control and conditions

//Objective:
//-for loops
//-Conditional logic
//-Loop control (break, continue condition handling)

//Instructions:
//Use the array created in Exercise 1
//Part 1
//Print all values of the array using:
//-A single console.log
//-One for loop
//(Do not use multiple console.log statements outside the loop.)
//Part 2
//Modify the loop to skip all even numbers.
//(Hint: use a conditional statement.)
//Part 3
//Modify the loop so that it stops when it reaches number 10.
//(Hint: use a conditional statement.)

//Empty array to hold the numbers
let numbersArray = [];
//Counter variable
let i = 1;
//Loop from 1 to 20 and the numbers into the array
while (i <= 20) {
  numbersArray.push(i);
  i++;
}
//Part 1
//Loop through the array
for (let j = 0; j < numbersArray.length; j++) {
//Print the current number
  console.log(numbersArray[j]);
}
//Part 2
//Loop through the array and skip even numbers
for (let j = 0; j < numbersArray.length; j++) {
//Check if the number is even
  if (numbersArray[j] % 2 === 0) {
    continue; // Skip even numbers
  } else {
    //Print the current number if it's odd
    console.log(numbersArray[j]);
    }
}
//Part 3
//Loop through the array and stop when number exceeds 10
for (let j = 0; j < numbersArray.length; j++) {
    //Check if the number exceeds 10
  if (numbersArray[j] > 10) {
    break; // Stop the loop when number exceeds 10
  } else {
    //Print the current number if it's 10 or less
    console.log(numbersArray[j]);
  }
}