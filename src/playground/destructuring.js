/* eslint-disable no-console */

// object destructuring

// const person = {
//   name: 'Hal',
//   age: 63,
//   location: {
//     city: 'Baton Rouge',
//     temp: 65
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

// array destructuring

// const address = ['9124 Old Hammond Hwy', 'Baton Rouge', 'La', '70809'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [desc,, price] = item;
console.log(`A medium ${desc} cost ${price}.`);
