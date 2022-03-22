function hello(name, myCallback) {
    setTimeout(() => {
        console.log('Hello, I am '+name);
        myCallback(name);
    }, 1000);
}

function speak(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackHablar()
    }, 1000);
}

function bye(name, otherCallback) {
    setTimeout(() => {
        console.log('Bye, '+name);
        otherCallback
    }, 3000);
}

function conversation(name, times, callback) {
    if (times > 0) {
        speak(function (){
            conversation(name, --times)
        })
    } else {
        bye(name, callback);
    }
}

console.log('Start process...');

hello('Luis', function (name) {
    conversation(name, 3, function() {
        console.log('End process...');
    });
});





