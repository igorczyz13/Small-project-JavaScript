//----------------------------------------------------Task 2.5
// stworz w js ul liste i dodaj ja na strone
// lista ma zawierac w sobie 10 tagow li, w kazdym li ma byc wypisana cyfra 1,2,3..
// pobierz ostatni element listy, ale nie dodawaj do niego zadnej klasy / ID!
// zmien zawartosc ostatniego elemntu na tekst 'jestem ostatnim elementem'
// za pomoca js, ustal style dla ostatniego elementu: backgroud-color: blue, padding 20px 40px, fz: 48px

const ulList = document.createElement('ul')
document.body.append(ulList)
const number = 10

for (let i = 1; i <= number; i++) {
    const liItem = document.createElement('li')
    liItem.textContent = i
    ulList.append(liItem)
}

const lastLi = ulList.querySelector('li:last-child')
lastLi.textContent = 'jestem ostatnim elementem'

lastLi.style.backgroundColor = 'blue'
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '48px'

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