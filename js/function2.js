// domyslne parametry funkcji
const hello = (name = 'drogi uzytkowniku') => {
    console.log(`Czesc ${name}, jak sie masz?`);
}

hello()

// ---------------------------------------------

const add = (x = 5, y = 10) => {
    console.log(x + 5);
}

add()

// SPREAD
const arr = [1, 2, 3, 4]
console.log(arr);
console.log(...arr);

// REST

const numbers = (x, y, z) => {
    console.log(x, y, z);

    console.log(z.map(el => el * 2));
    console.log(x + y);
}

numbers(13, 456, 21313, 234, 3, 5, 8, 3, 'ab', true)


// --------------------------------------------------