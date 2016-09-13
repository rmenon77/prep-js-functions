/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */

//declare 2 variables and assign them random numbers
var a = 12;
var b = 9;

//function add
//adds variable a and b
//store the variable in var named sum

function add(num1, num2){
return num1 + num2;


}
var sum = add(a, b);
console.log(sum);


/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */


/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */


function subtract(num1, num2){
return num1 - num2;

}

var difference = subtract(a, b);
console.log(difference);

/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */

function multiply(num1, num2){
return num1 * num2;


}
var product = multiply(a, b);
console.log(product);


/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */


function checkDifference(X){
return "My football team lost " + X + " times this week"; 

}
var timesLost = checkDifference(difference);
console.log(timesLost); 

/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */
 // var sum adds a + b

function checkSum (X) {
return "I CAN ADDZ " + X + " NUMBERS";


}
var addNumbers = checkSum(sum);
console.log(addNumbers);

/**
 *  #7
 *  Function - checkProduct
 *
 *  This function checks the value stored at `product` and
 *  multiplies it by the number stored at `difference` and
 *  then prints the result to the console.
 */

function checkProduct(num1, num2) {
	return num1 * num2;
}

var numResult = checkProduct(product, difference);
console.log(numResult);
/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */



function addThenSubtract(num1, num2, num3) {
//return num1 + num2 - num3;
var sum = add(num1, num2);
var difference = subtract(sum, num3);
return difference;

}
 
 var numResult2 = addThenSubtract(product, sum, difference);
 console.log(numResult2);

// one line of code:
//return subtract (add(n1, n2), n3);
//console.log(addThenSubtract(a,b,c));
 
/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */


function addThenMultiply(num1, num2, num3) {
//return num1 + num2 * num3;
var sum = add(num1, num2);
var product = multiply(sum, num3);
return product;

}

var howMany = addThenMultiply(product, sum, difference);
console.log(howMany);


/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */

function createFullName(firstName, lastName) {
	return firstName  +  " " + lastName;
	
}

var myFullName = createFullName("Ruby", "Menon");
console.log(myFullName);


/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */

// set up function first
// number argument "age" will be a number data structure
// returns a boolean value of true or false
// if age is lower will yield an if statement with else structure
// call the function but it requires a var to store the canDrinkBeer value 
// vs. just using the console.log(verifyDrinkingAge(29))

function verifyDrinkingAge(age) {
		if   (age >= 21) {
			return true;
		} else {
			return false;

		}
		

}

var canDrinkBeer = verifyDrinkingAge(19);
console.log(canDrinkBeer);

/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */

function throwParty(age) {
		if   (age === false) {
			return "This Party will have an open bar";

			} 
			else 
				{return "This Party will have tons of cake";

			}
		

}

console.log(throwParty(canDrinkBeer));

/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */



function eatFood(firstName, lastName, food) {
	var myFullName = createFullName(firstName, lastName);
	return myFullName + " " + "loves to eat" + " " + food;

}
var input = eatFood("Ruby", "Menon", "Pizza");
console.log(input);

 

/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */

// return a string X amount of times
// X is the value stored at howMany = 387; var a=12; var b=9; product=108 sum=21 diff=3
// inside the function:
//		check the value of canDrinkBeer
//		if the value is true then "Bacon Pancakes"
//		if the value is false then "LET IT G000000000"

	
// how many is a global variable
// var howMany = addThenMultiply(product, sum, difference);

function repeater(x, age){
  for(var i = 0; i<x; i++){
    if(age === true){
      console.log("bacon Pancakes");
    }else{
      console.log("let it go...");
    }
  }
}
repeater(howMany, canDrinkBeer);
