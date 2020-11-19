// lesson 24 - 28

/**
 * Functions
 */

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  return null;
  return undefined;
}

const throwError = (message: string): never => {
  throw new Error();
}

const throwError1 = (message: string): void => {
  if (!message) {
    throw new Error();
  }
}

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error();
  }
  return message;
}

// destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.weather);
}
// es6
const logWeather6 = ({
  date,
  weather
}: {
  date: Date,
  weather: string
}): void => {
  console.log(weather);
}
logWeather(todaysWeather);

/**
 * Objects
 */

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// ES6 destructuring
const { age, name }: { age: number, name: string } = profile; // redeclare can be ignored
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;





