'use strict';

const createArray = function (integerArray) {
  let result = []

  for (let i = 0; i < integerArray.length; i++) {
    // integerArray[0] is the first array in integerArray
    // integerArray[0][i] calls the first element of the first array
    // nested arrays
    result[i] = integerArray[i] * 2;
  }

  return result
};

const arrayTransform = function (array, predicate, mutator) {
  // import ./ins file
  const ins = require('./ins')
  // if the predicate is true, mutate the value, otherwise don't mutate it
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = ins.transform(array[i], predicate, mutator)
  }
}

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  return {
    // givenName: givenName --> this is a value
    givenName, // this is a key of this object literal. givenName === givenName: givenName === "givenName" : givenName
    surname,
    bornOn,
    height,
    weight,
    eyeColor,
  }
};
// this function is a boilerplate. these attributes are locked in.
// things that do change need to come in as attributes. you can't change values.
// this does the same thing as a constructor function.
// you can return objects from functions

const memoFactory = function (rememberMe) {

  let memo = rememberMe
  return function () {
    return memo // this works because it has access to the variables in the parent function
  }
};

const counterFactory = function () {
  let tick = 0
  return function () {
    return tick++
  }
};

module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
