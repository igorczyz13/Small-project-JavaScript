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