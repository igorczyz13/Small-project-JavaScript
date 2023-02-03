const pass = 'asd1212123123§!'

if (pass.length > 10 && pass.includes('!')) {
    console.log('Masz bardzo dobre haslo');
} else if (pass.length > 10) {
    console.log('Masz dobre haslo');
} else {
    console.log('Masz chujowe haslo mordo');
}



///

const color = 'blue'

if (color == 'blue') {
    if (10 < 0) {
        console.log('true true');
    } else {
        console.log('okok');
    }
} else {
    console.log('false');
}

// switch

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