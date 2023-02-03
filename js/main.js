const pass = 'asd1212123123§!'

if (pass.length > 10 && pass.includes('!')) {
    console.log('Masz bardzo dobre haslo');
} else if (pass.length > 10) {
    console.log('Masz dobre haslo');
} else {
    console.log('Masz chujowe haslo mordo');
}



//-------------------------------------

const color1 = 'blue'

if (color1 == 'blue') {
    if (10 < 0) {
        console.log('true true');
    } else {
        console.log('okok');
    }
} else {
    console.log('false');
}

// switch ----------------------------------

const day = 'piatek'

switch (day) {
    case 'poniedzialek':
        console.log('dzis jest poniedzialek');
        break
    case 'wtorek':
        console.log('dzis jest wtorek');
        break
    case 'sroda':
        console.log('dzis jest sroda');
        break
    case 'czwartek':
        console.log('dzis jest czwartek');
        break
    case 'piatek':
        console.log('dzis jest piatek');
        break
    default:
        console.log('weeeekend!');
}

// instrukcje warunkowe ------------------------------

const x = 10

if (x > 20) {
    console.log(`${x} > 20`);
} else {
    console.log(`${x} < 20`);
}

// to samo inaczej napisane (operator warunkowy)


const newX = x > 20 ? `${x} > 20` : `${x} < 20`;
console.log(newX);

//

const isLoggedIn = false

function loggedIn() {
    console.log('uzytkownik jest zalogowany');
}

function loggedOut() {
    console.log('uzytkownik nie jest zalogowany');
}

//

if (isLoggedIn) {
    loggedIn()
} else {
    loggedOut()
}

// the same shit

isLoggedIn ? loggedIn() : loggedOut()


// ----------------------------- TASK 1

const X = 50
const Y = 30

if (X > Y) {
    console.log(`${X} jest wieksze od ${Y}`);
}

// ----------------------------- TASK 2

// == - porównujemy zawartosc,  === - porownujemy zawartosc i typ danych

const color = 'blue'
const newColor = 'green'

if (color === newColor) {
    console.log('Kolory sie zgadzaja');
} else {
    console.log('Kolory sie nie zgadzaja');
}

// ----------------------------- TASK 3

const x1 = 100
const y2 = 50

if (x1 < y2) {
    console.log(`${x1} > ${y2}`);
} else if (x1 === y2) {
    console.log(`${x1} = ${y2}`);
} else {
    (x1 < y2)
    console.log(`${x1} < ${y2}`);
}

// ----------------------------- TASK 4

const promo = '20%'

switch (promo) {
    case '10%':
        console.log('Dziś mam 10% znizki');
        break
    case '20%':
        console.log('Dziś mam 20% znizki');
        break
    case '30%':
        console.log('Dziś mam 30% zniżki');
        break
        default:
        console.log(`Dziś mamy ${promo} zniżki`);
}       


// ----------------------------- TASK 5
// stwórz zmienna x i przypisz do niej wartosc 10, za pomoca operatora warunkowego sprawdz czy,
// wartosc przypisana do x jest parzysta, w konsoli wypisz odpowiednia informacje np: x jest parzyste

const X2 = 10

const check = X2 % 2 == 0 ? 'X jest parzyste' : 'X nie jest parzyste'
console.log(check);

// ----------------------------- TASK 6

