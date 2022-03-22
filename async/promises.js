function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hello, I am '+name);
            resolve(name);
        }, 5000);
    });
}

function speak(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            // resolve(name)
            reject('Error')
        }, 1000);
    });
}

function bye(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bye, '+name);
            resolve();
        }, 3000);
    });
}

console.log('Start process..');

hello('Luis')
    .then(speak)
    .then(bye)
    .then((name) => {
        console.log('End process');
    }).catch((err) => {
        console.log(err);
    });





