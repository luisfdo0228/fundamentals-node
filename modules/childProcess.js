const { exec, spawn } = require('child_process');


// exec('ls -la', (err, stdout, sterr) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }

//     console.log(stdout);
// })


let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato) => {
    console.log(dato.toString());
})

process.on('exist', () => {
    console.log('el proceso termino');
});