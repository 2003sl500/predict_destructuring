const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);
console.log(otherName);

// expected output
// Elon
// error, othername not defined

// actual output
// error, name is not defined