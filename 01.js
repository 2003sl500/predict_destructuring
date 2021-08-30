const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars

console.log(randomCar)
console.log(otherRandomCar)

// expected output:
// Tesla
// Mercedes

// actual output:
// Tesla
// Mercedes