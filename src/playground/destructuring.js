// const person = {
//   name: 'Ken',
//   age: 31,
//   location: {
//     city: 'Kyoto',
//     temp: 37
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperture } = person.location;

// console.log(`${firstName} is ${age}.`);

// if (temperture && city) {
//   console.log(`It's ${temperture} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-pulished' } = book.publisher

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`)

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// const [drink, short, medium, large] = item;

// console.log(`A medium ${drink} costs ${medium}.`)