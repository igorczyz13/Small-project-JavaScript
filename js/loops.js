// Task loops

const animal = ['lion', 'dog', 'cat', 'fox', 'mouse', 'kiwi']

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}

// -------------------------------

const colors = ['red', 'blue', 'yellow', 'black', 'grey', 'pink', ]

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// loops while

// let i = 0

// while (i < 5) {
//     i++
//     console.log(i);
// }

// loops do while

let i = 0

do {
    i++
    console.log(i);
} while (i < 2)

// for of

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

// druga metoda ta z for of

for (const number of numbers) {
    console.log(number * 2);
}

// ----------------------------- task 1

const cities = ['Toki', 'Los Angeles', 'London', 'Rome', 'Paris']

for (let i = 0; i < cities.length; i++) {
    console.log(`to miasto nazywa sie: ${cities[i]}`);
}