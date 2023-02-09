// deklaracja funkcji

function test() {
    console.log('czesc');
}

test()

// wyrazanie funkcyjne

const helloWorld = function () {
    console.log('czesc 123');
}

helloWorld()

// funkcja z argumentami

function add(x,y) {
    if (x < y) return

    console.log(x + y);
}

add(15,10)

// stworz funkcje ktora przyjmie dwa parametry / argumenty
// funkcja ma wypisac w konsoli zdanie:
// "Czesc mma na imie [imie z parametru]" i mam [wiek z parametru] lat"

function hello(name, age) {
    console.log(`czesc mam na imie ${name} i mam ${age} lat`);
}

hello('igor', 27)

// funkcja anonimowa

const heading = document.querySelector('h1')

heading.addEventListener('click', function() {
    console.log('kliknieto mnie');
})

// funkcja strzalkowa

const arrowFunction = () => {
    // tak wyglada funkcja strzałkowa
}

// -------------------------------------------
function test(name) {
    console.log(`mam na imie ${name}`);
}

test('klaudia')
// -------------------------------------------

const test2 = (name) => {
    console.log(`Mam na imie ${name}`);
}

test2('lisa')
// -------------------------------------------

const test3 = name => console.log(`Mam na imie ${name}`);
test3('tomek')

const test4 = (name, age) => console.log(name, age)
test4('name', 123)

// -------------------------------------------

function add(num1, num2) {
    return num1 + num2
}

const add2 =  (num1, num2) => {
    console.log('czesc');
    return num1 * num2
}

const days = ['poniedziałek', 'wtorek', 'sroda']
const days2 = days.forEach(function(day) {
    console.log(day);
})
console.log('--------');

const days3 = days.forEach(day => console.log(day))

// -------------------------------------------
