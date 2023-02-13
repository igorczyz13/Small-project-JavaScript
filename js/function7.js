// const ulList = document.createElement('u')
// const liList = document.createElement('li')
// liItem.textContent = 'czesc'

// document.body.appendChild(ulList)
// ulList.appendChild(liItem)

// // dodaj div w html, pobierz go w js, w js stworz paragraf, umiesc paragraf w divie

// const div = document.querySelector('div')

// const p = document.createElement('p')
// div.appendChild(p)

// ---------------------------------------------


// const div = document.querySelector('div')
// const p = document.createElement('p')
// const headingTwo = document.createElement('h2')

// const btn = document.querySelector('button')

// console.log(btn.outerHTML);

// --------------------------------------------

// const div = document.querySelector('div')
// const p123 = document.querySelector('p')

// // removeChild

// div.removeChild(p123)

// // remove

// p123.remove()

// // ---------------------------------------------
// // target.addEventListener(type, listener)

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// btn1.addEventListener('click', function () {
//     console.log('kliknięto mnie!');
// })

// btn2.addEventListener('mouseover', () => console.log('najechano na mnie'))

// const test = () => {
//     console.log('double click');
// }

// btn3.addEventListener('dblclick', test)

// // -------

// btns.forEach(btn => btn.addEventListener('click', smile))


// -----------------------------------------------------

// const btn = document.querySelector('button')

// const test = (e) => {
//     console.log(e);
// }

// btn.addEventListener('click', test)

// // ----------------------------------------------------
// // bubbling & capturing

// const lime = document.querySelector('.lime')
// const blue = document.querySelector('.blue')
// const gold = document.querySelector('.gold')

// const infoLime = () => {
//     console.log('%clime', 'color: lime; text-transform: uppercase');
// }
// const infoBlue = () => {
//     console.log('%cblue', 'color: royalblue; text-transform: uppercase');
// }
// const infoGold = () => {
//     console.log('%cgold', 'color: gold; text-transform: uppercase');
// }

// lime.addEventListener('click', infoLime)
// blue.addEventListener('click', infoBlue)
// gold.addEventListener('click', infoGold)

// -----------------------------------------------------
// delegacja zdarzen

// const allCircles = document.querySelectorAll('.circle')
// const gold = document.querySelector('.gold')
// const lime = document.querySelector('.lime')

// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

// const newCircle = document.createElement('div')
// newCircle.classList.add('circle', 'purple')
// gold.append(newCircle)

// --------------------------------------------------------

const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const toggleBtn = document.querySelector('.toggle')
const text = document.querySelector('p')

const addClass = () => {
    text.classList.add('test')
}

const removeClass = () => {
    text.classList.remove('test')
}

const toggleClass = () => {
    text.classList.toggle('test')
}

addBtn.addEventListener('click', addClass)
removeBtn.addEventListener('click', removeClass)
toggleBtn.addEventListener('click', toggleClass)