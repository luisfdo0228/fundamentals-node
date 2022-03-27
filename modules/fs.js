const fs = require('fs');

function read(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function write(route, content, cb) {
    fs.writeFile(route, content, (err) => {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function deleteFs(route, cb){
    fs.unlink(route, cb)
}

let route = './assets/files/file.txt';
let content = 'En este nuevo contenido agregamos el nombre Luis Fernando Hernandez';

write(route, content)
// read(route, console.log);
// deleteFs(route, console.log);

