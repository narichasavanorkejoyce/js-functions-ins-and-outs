// reference types are objects and functions
// functions can take functions
// functions can take anything as arguments
// functions can return anything as arguments
// arguments are what you feed in to call a function

// function expression:
// const add = function (a,b) {}
// most people use function expressions

const add = function(a, b) { // parameters
  // names don't matter, but they need to add meaning. Order does matter
  return a + b
}

add(5, 3) // arguments // --> 8
// a --> 5, b --> 3. Order matters
// think of functions as things that you are accessing values out of
// we are just accessing a value.
// Sometimes that value is an object, a primitive, another function
// if you do not get a value, then it is undefined

const inst = {
  name: 'Jeff'
}

inst.name // 'Jeff'. We get a value.
inst['name'] // object access

const numbers = [1, 2]

numbers[1] // 2 // array access // get a value out with a number

'use strict';

// You are allowed to pass in arguments that are not defined in the function
// Javascript can bind a 3rd argument to an argument object
// Array like = behaves like an array but it is not an Array
// mdn array like
// not all methods are going to work

// DEMO
const product = function() {
  let result = 1;
  // accumulator function
  // arguments = [3,5]
  // you don't have to assign parameters because we're using the argument object
  // this is powerful. you can call product(3, 6) or product (4,5,6)
  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i]
  }

  return result
}

// CODE ALONG

// takes an arbitrary number of arguments (each arg
// should be a number), finds the largest one, and
// returns that member

const max = function() {
  let result = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    // check that the arguments are numbers
    // if (typeof arguments[i] !== 'number') {
    //   continue
    // }
    // if (isNaN(arguments[i])) { continue }
    // } else {
    //   result = arguments[i]
    // }
    // result = result < arguments[i] ? arguments[i] : result
    if (result < arguments[i]) {
      result = arguments[i]
    }
  }
  return result
}
// NaN NOT WORKING

// LAB
const arrayTimes2 = function(arr) {
  let result = arr[0]
  for (let i = 1; i <= arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i]
    }
  }
  return result
};

let arr = [-10, 20, 1000, -1]
arrayTimes2(arr) // --> 1000

// Reference types as arguments and return values
// Write a function that takes an array full of integers, doubles each value, and
// returns a new array with those values.
const arrayTimes3 = function (integerArray) {
  let result = []

  for (let i = 0; i < integerArray.length; i++) {
    // integerArray[0] is the first array in integerArray
    // integerArray[0][i] calls the first element of the first array
    // nested arrays
    result[i] = integerArray[i] * 2;
  }

  return result
}
// we can return array types

const addProperty = function(obj, prop, value) {
  obj[prop] = value
  return obj
}

addProperty(inst, 'location', 'boston')

// Main Effect
  // return value
  // return 'Jeff'

// Side Effect
  // "something else"
  // console.log ('Jeff')

// Functions are valid arguments

const transform = function(value, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it
  // when we have functions inside of functions, we're taking out bits of code
  // and placing it in resuable places
  // a callback is a function that is passed to another function
  if (predicate(value)) {
    return mutator(value)
  }
  return value
};

const transform = function(value, predicate, mutator){
  if(predicate(value)){
    return mutator(value)
  }
  return value
}

// predicate functions return true or false.
// Start the name with 'is' (ex. isCm)
// code here is structured in a boilerplate form
const isCm = function(height){
  if(height > 100){
    return true
  }
    return false
}

// mutator function
const cmToInches = function(value){
  return value/2.54
}

let heightOfJoe = 67

let heightOfJulie = 141

heightOfJoe = transform(heightOfJoe, isCm, cmToInches)
heightOfJulie = transform(heightOfJulie, isCm, cmToInches)

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
