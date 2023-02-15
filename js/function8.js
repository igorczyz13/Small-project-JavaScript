//----------------------------------------------------Task 2.5
// stworz w js ul liste i dodaj ja na strone
// lista ma zawierac w sobie 10 tagow li, w kazdym li ma byc wypisana cyfra 1,2,3..
// pobierz ostatni element listy, ale nie dodawaj do niego zadnej klasy / ID!
// zmien zawartosc ostatniego elemntu na tekst 'jestem ostatnim elementem'
// za pomoca js, ustal style dla ostatniego elementu: backgroud-color: blue, padding 20px 40px, fz: 48px

// const ulList = document.createElement('ul')
// document.body.append(ulList)
// const number = 10

// for (let i = 1; i <= number; i++) {
//     const liItem = document.createElement('li')
//     liItem.textContent = i
//     ulList.append(liItem)
// }

// const lastLi = ulList.querySelector('li:last-child')
// lastLi.textContent = 'jestem ostatnim elementem'

// lastLi.style.backgroundColor = 'blue'
// lastLi.style.padding = '20px 40px'
// lastLi.style.fontSize = '48px'

//----------------------------------------------------Task 2.6
// Pobierz pliki z zasobow
// pobierz w js paragrafy, przycisk oraz div-a .square
// stworz funkcje
//#1: wyloguj w konsoli napis 'czesc'
//#2: zmien kolor .square na czerwony
//#3: zmien kolor .square na niebieski
//#4: najpierw dodaj klase .show do 'Paragrafu 1' i usun klase .show z 'paragrafu 2', potem zrob na odwrot(toggle)
// funkcje maja byc odpalana za pomoca:
//#1 podwojnego klikniecia przycisku z burgerem
//#2 wjechania mysza na div.square
//#3 zjechania mysza z div.square
//#4 klikniecia w przycisk z pizza


const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('square')

const fun1 = () => {
    console.log('czesc');
}

const fun2 = () => {
    square.style.background = 'tomato'
}

const fun3 = () => {
    square.style.background = 'royalblue'
}

const fun4 = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

btn1.addEventListener('dblclick', fun1)
square.addEventListener('mouseenter', fun2)
square.addEventListener('mouseenter', fun3)
btn2.addEventListener('click', fun4)

// ---------------- BUG #004

// var n = 1

// if (n === 1) {
//     var n = 2
//     console.log(n);
// }

// console.log(n);

// poprawne rozwiazanie

let n = 1

if (n === 1) {
    let n = 2
    console.log(n);
}

console.log(n);

// ----------------- BUG #005

// function addToArray(item, array) {
//     const newArray = array
//     newArray.push(item)

//     return newArray
// }

// const fruits = ['apple', 'orange']
// const favFruits = addToArray('banana', fruits)

// console.log({fruits, favFruits});

// poprawne rozwiazanie

function addToArray(item, array) {
    const newArray = array.concat(item)

    return newArray
}

const fruits = ['apple', 'orange']
const favFruits = addToArray('banana', fruits)

console.log({
    fruits,
    favFruits
});