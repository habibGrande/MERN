const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// the first output will be the first object in the array 
// and the second output will be the second object in the array because the const uses a "," in it

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// the first output will be an error because we cant call a key from an object 
// the second output will be the value of name so it will be Elon


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// the first output will be the const of password 12345
// the second output will be undefined because the person doesnt have a password attribute


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// the first output will be false because the first = 2 and second = 5 and they dont equal each others
// the second will return true because 2 equals 2



const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// the first output will be value
// Second output will be [1, 5, 1, 8, 3, 3]
// third output will be 1 the index 0 if the array
// the output will be 5







