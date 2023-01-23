// X Marks the perfect shot
/*
const finalPosition = function(moves) {
  let position = [0, 0];
  for (let direction of moves) {
    if (direction == "north") {
      position[1] += 1;
    } else if (direction === "south"){
      position[1] -= 1;
    } else if (direction === "west"){
      position[0] -= 1;
    } else if (direction === "east"){
      position[0] += 1;
    }
  }
  //return position;
  console.log(position);
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
finalPosition(moves);
*/

// Age calculator
/*
const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";

}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

//how many hundreds
/*
const howManyHundreds = function(number) {
  let rest = number%100;
  return (number-rest)/100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/

// Area calculators
/*
const calculateRectangleArea = function(length, width) {
  if(length < 0 || width < 0){
    return undefined;
  } else {
    return length * width;
  }
}
const calculateTriangleArea = function(base, height) {
  if(base < 0 || height < 0){
    return undefined;
  } else {
    return base * height / 2;
  }
}
const calculateCircleArea = function(radius) {
  if(radius < 0){
    return undefined;
  } else {
    return Math.PI * radius * radius;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
*/
