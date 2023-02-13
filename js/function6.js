// // getElementById

// const test = document.getElementById('item')

// console.log(test);

// // getElementsByTagName

// const test2 = document.getElementsByTagName('ul')
// console.log(test2);


// // getElementsByClassName

// const test3 = document.getElementsByClassName('test')
// console.log(test3);


// querySelector (ES6)
// const test = document.querySelector('li')
// console.log(test);

// const ulList = document.querySelector('ul')
// console.log(ulList);

// const liItem = ulList.querySelector('li')
// console.log(liItem);

// // querySelectorAll (ES6)

// const liItems = document.querySelectorAll('li')
// console.log(liItems);


// // zywe kolekcje, czyli qSA vs getElemntsByTag / ClassName

// const newLi = document.createElement('li')
// ulList.appendChild(newLi).textContent = 'hu'

// console.log(liItems.length);

// --------------------------------------------------- Task 2.4

const heading = document.querySelector('h1')
console.log(heading);

const paragraf = document.querySelectorAll('p')
console.log(paragraf);

const testDiv= document.querySelector('.test')
console.log(testDiv);

const jeff = testDiv.querySelector('#test')
console.log(jeff);
