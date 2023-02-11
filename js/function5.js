// ---------------------------------------- Task 2.1
// stworz zmienna globalna score. stworz funkcje add, ktora przyjmuje dwa parametry, funkcja ma dodawac elementy, wynik dzialania przypisz do zmiennej score. Stworz dwie funkcje, ktore beda zwracaly w konsoli zdanie: funkcja #1: liczba X jest parzysta, funkcja #2: liczba X jest nieparzysta. w funkcji add stworz if'a, ktory sprawdzi, czy score jest parzystam czy nie. W zależności od wyniku, niech if odpali funkcje #1 lub #2. na koncu kodu wywolaj funkcje add i przekaz jej dwa dowolne argumenty.


// opcja 1

let score = []

const add = (x, y) => {
    score = x + y

    if(score % 2 === 0) {
        evenMsg()
    } else {
        oddMsg()
    }
}

const evenMsg = (params) => {
    console.log(`liczba ${score} jest parzysta.`);
}
const oddMsg = (params) => {
    console.log(`liczba ${score} jest nieparzysta.`);
}

add(10,11)