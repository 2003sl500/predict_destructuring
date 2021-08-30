const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedPassword);

// expected output
// 12345
// error, person does not have attribute hashedPassword

// actual output
// 12345
// undefined