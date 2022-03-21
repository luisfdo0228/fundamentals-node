function hello(name, myCallback) {
    setTimeout(() => {
        console.log('Hello, I am '+name);
        myCallback(name);
    }, 1000);
}

function bye(name, otherCallback) {
    setTimeout(() => {
        console.log('Bye, '+name);
        otherCallback();
    }, 3000);
}

console.log('Start process...');

hello('Luis', function (name) {
    bye(name, function (){
        console.log('End process...');
    });
});





