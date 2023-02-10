const numbers = [0.5, 4, 'abc']
const names = ['lisa', 'lily', 'adam', 'przemek']

numbers.forEach(num => console.log(num * num))

// korzystaj z map, forEach nie zwraca 
const bigNames = names.map(name => name.toUpperCase())
console.log(bigNames);

// ---------------

const showBigNames = (name) => {
    console.log(name.toUpperCase());
}

names.forEach(showBigNames)
console.log('---');

// opcja druga

names.forEach(el => console.log(el.toUpperCase()))


