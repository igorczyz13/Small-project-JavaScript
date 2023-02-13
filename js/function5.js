// ---------------------------------------- Task 2.1
// stworz zmienna globalna score. stworz funkcje add, ktora przyjmuje dwa parametry, funkcja ma dodawac elementy, wynik dzialania przypisz do zmiennej score. Stworz dwie funkcje, ktore beda zwracaly w konsoli zdanie: funkcja #1: liczba X jest parzysta, funkcja #2: liczba X jest nieparzysta. w funkcji add stworz if'a, ktory sprawdzi, czy score jest parzystam czy nie. W zależności od wyniku, niech if odpali funkcje #1 lub #2. na koncu kodu wywolaj funkcje add i przekaz jej dwa dowolne argumenty.


let score = []

const add = (x, y) => {
    score = x + y

    score % 2 === 0 ? evenMsg() : oddMsg()
}

const evenMsg = (params) => {
    console.log(`liczba ${score} jest parzysta.`);
}
const oddMsg = (params) => {
    console.log(`liczba ${score} jest nieparzysta.`);
}

add(10, 11)


// ---------------------------------------- Task 2.2
//stworz zeminne celsius oraz temp, stworz funkcje fahrenheit, ktora przyjmie jeden parametr, argument ma zostac przypisany do zmiennej celsius(wewnatrz funkcji), funkcja ma przekonwertowac C na F, wyniki przypisz do zmiennej temp. wzor: T(F) = T(C) x 1,8 + 32. wywolaj funkcje, podaj do niej jakies argumenty(typ number czyli nasza temperature). wynik wypisz w konsoli za pomoca template stringa, np X C = Y F

let celsius
let temp

const fahrenheit = (c) => {
    celsius = c

    temp = celsius * 1.8 + 32

    console.log(`${c} = ${temp}`);
}

fahrenheit(20)


// ---------------------------------------- Task 2.3
// Stworz zmienne num oraz numbers. do tej pierwszej przypisz wartosc 10, a do drugiej pusta tablice, stworz petle for, ktora bedzie wykonywala sie tak dlugo, az i bedzie mniejsza od num, petla ma dodawac i do tablicy numbers. stworz funkcje, ktora przyjmie jeden parametr, w funkcji ma byc if, ktory sprawdzi, czy liczba podana w argumnecie jest podzielna przez 3 oraz jest rozna od zera. jesli tak - wypisz w konsoli x jest podzielne przez 3, jesli nie - wypisz w konsoli x nie jest podzielne przez 3 lub x = 0. za pomoca forEach odwolaj sie do tablicy numbers


const num = 10
const numbers = []

for (let i = 0; i < num; i++) {
    numbers.push(i)
}

const checkNumbers = (number) => {
    if (number % 3 === 0 && number !== 0) {
        console.log(`${number} jest podzielne przez 3`);
    } else {
        console.log(`${number} jest podzielne przez 3 lub ${number} = 0`);
    }
}


numbers.forEach(checkNumbers)

// bug #001

const dog = {
    paws: 4
}
const cat = {
    ...dog
}

cat.meow = true

if (dog.meow) {
    console.log("That's not a dog!")
}

// bug #002
const now = new Date()
const future = new Date()

future.setHours(now.getHours() + 6)

console.log({
    now,
    future
})