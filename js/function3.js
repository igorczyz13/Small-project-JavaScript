// funkcje zakresy

const name = 'lisa'

const test = () => {
    const name = 'lily'
    console.log(`NAME w funkcji - ${name}`);

    const age = 23
    console.log(age);

    const test2 = () => {
        console.log('---');

        console.log(name);
        console.log(age);

        const color = 'blue'
        console.log(color);

        console.log('---');
    }
    test2()

    const test3 = () => {
        console.log(color);
    }
    // test3()
}
test()

console.log(`NAME poza funkcja - ${name}`);