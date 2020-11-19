// Lesson 15 ~ 22

/**
 * annotations
 */

let apples: number = 5;
// const apples1: number = true;
// apples = 'feiwaof';
apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  // x: '',
  x: 10,
  // u: 20
  y: 20
};

// Function
// void means nothing to return
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


/**
 * Type inference
 */

let pear = 5; // in the same line will figure out the type
// pear = true;
let orange;
orange = 6;

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10,y:20}
// coordinates.jfieawief

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

