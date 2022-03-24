// require();

let i = 0;
let interval = setInterval(() => {
    if(i === 3){
        clearInterval(interval);
    } else {
        console.log('Hola');
    }
    i++;
}, 1000);


setImmediate(() => {
    console.log('Hola 2');
})


console.log(process);
console.log(__dirname);

// How can i create to variable global
global.myVariable = 'value';

console.log(myVariable);

