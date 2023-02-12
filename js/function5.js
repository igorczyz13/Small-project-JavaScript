// ---------------------------------------- Task 2.1
// stworz zmienna globalna score. stworz funkcje add, ktora przyjmuje dwa parametry, funkcja ma dodawac elementy, wynik dzialania przypisz do zmiennej score. Stworz dwie funkcje, ktore beda zwracaly w konsoli zdanie: funkcja #1: liczba X jest parzysta, funkcja #2: liczba X jest nieparzysta. w funkcji add stworz if'a, ktory sprawdzi, czy score jest parzystam czy nie. W zależności od wyniku, niech if odpali funkcje #1 lub #2. na koncu kodu wywolaj funkcje add i przekaz jej dwa dowolne argumenty.


// opcja 1

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

add(10,11)

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