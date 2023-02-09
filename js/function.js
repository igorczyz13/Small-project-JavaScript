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