async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hello, I am '+name);
            resolve(name);
        }, 5000);
    });
}

async function speak(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            resolve(name);
            // reject('Error')
        }, 1000);
    });
}

async function bye(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bye, '+name);
            resolve();
        }, 3000);
    });
}

async function main(){
    let response = await hello('Luis');
    await speak(response);
    await speak(response);
    await speak(response);
    await bye(response);
    console.log('end process');
}

console.log('start process');

main();


