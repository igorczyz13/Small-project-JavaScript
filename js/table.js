// const numbers = [1, 2, 3, 4, 5, 6]

// const arr = [true, 123, 'abcd', ['nowa tablica', 0]]

// // rozwiazanie dla kilku przycisków 

// // const btn1 = document.querySelector('button:nth-of-type(1)')
// // const btn2 = document.querySelector('button:nth-of-type(2)')
// // const btn3 = document.querySelector('button:nth-of-type(3)')

// // rozwiazanie dla wiekszej ilosci przycisków

// const btns = document.querySelectorAll('button')


// // console.log(btn1, btn2, btn3);

// function btnMsg(e) {
//     console.log(`kliknieto ${e.target.textContent} ! `);
// }

// // rozwiazanie dla kilku przyciskow

// // btn1.addEventListener('click', btnMsg)
// // btn2.addEventListener('click', btnMsg)
// // btn3.addEventListener('click', btnMsg)

// // rozwiazanie dla wielu przyciskow

// btns.forEach(btn => btn.addEventListener('click', btnMsg))


// ---------------------

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers);

// numbers.unshift(100, 200, 'abcd')
// console.log(numbers);

// numbers.shift()
// console.log(numbers);

// // unshift - dodaje elementy na poczatku tablicy
// // shift - usuwa elementy z indeksem 0

// const colors = ['red', 'green', 'blue']
// console.log(colors);

// colors.push('gold', 123)
// console.log(colors);

// colors.pop()
// console.log(colors);

// // push - dodaje elementy na koncu tablicy
// // pop - usuwa ostatni element

// ---------------------

const numbers = [1, 2, 3, 4, 5]

// function multiply(x) {
//     return x * 2
// }

// const newNumbers = numbers.map(multiply)
// console.log(numbers);
// console.log(newNumbers);

// numbers.push(6, 7, 8)

const abc = ['a', 'b', 'c']
const newAbc = numbers.concat(6, 7, 8, true, abc)

// console.log(newAbc);
// console.log(numbers);


// ...

console.log(abc);
console.log(... abc);

const drinks = ['pepsi', 'kawa', 'sok']
const meals = ['schabowy', 'spaghetti', 'zupa']

const menu = [...drinks, ...meals]
console.log(menu);

const menu2 = drinks.concat(meals)
console.log(menu2);