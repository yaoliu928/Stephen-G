// lesson 29-32

const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()]

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const carsByMakeInitial: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop(); // chevy

// Prevent incompatible values
carMakers.push(100);
carMakers.push('implaza');

// Help with 'map
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// contain multiple different types --- Flexible types
const importantDates: (string | Date | number)[] = [new Date(), '2030-10-10'];
importantDates.push(1988);
// importantDates.push(true);