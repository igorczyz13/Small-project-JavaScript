// // Task loops

// const animal = ['lion', 'dog', 'cat', 'fox', 'mouse', 'kiwi']

// for (let i = 0; i < animal.length; i++) {
//     console.log(animal[i]);
// }

// // -------------------------------

// const colors = ['red', 'blue', 'yellow', 'black', 'grey', 'pink', ]

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// // loops while

// // let i = 0

// // while (i < 5) {
// //     i++
// //     console.log(i);
// // }

// // loops do while

// let i = 0

// do {
//     i++
//     console.log(i);
// } while (i < 2)

// // for of

// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2);
// }

// // druga metoda ta z for of

// for (const number of numbers) {
//     console.log(number * 2);
// }

// // ----------------------------- task 1.1
// // stworz tablice z nazwami miast. za pomoca petli for, w konsoli wypisz miasta w zadaniu:
// // to miasto nazywa sie:...

// const cities = ['Toki', 'Los Angeles', 'London', 'Rome', 'Paris']

// for (let i = 0; i < cities.length; i++) {
//     console.log(`to miasto nazywa sie: ${cities[i]}`);
// }

// // ----------------------------- task 1.2
// // stworz zmienna x i przypisz do niej wartosc 0, stworz petle while, ktora bedzie zwiekszala X o 2 (2,4,6,8,10). Petla ma sie wykonac do momentu, w ktorym X bedzie wieksze lub rowne 10 do punktu 2 - taki zapis nie rozwiaze zadania: x++ x++, skorzystaj z operatorow przypisania

// // let x = 0

// // while(x < 10) {
// //     x += 2
// //     console.log(x);
// // }

// // ----------------------------- task 1.3
// // stworz zmienna x i przypisz do niej wartosc 20, stworz petle do while, ktora bedzie zmniejszala x o 3, petla ma sie wykonywac do momentu, w ktorym x bedzie wieksze od 0

let x1 = 20

do {
    x1 -= 3
} while (x1 > 0)
console.log(x1);