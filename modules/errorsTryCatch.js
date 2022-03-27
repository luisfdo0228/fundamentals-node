function otherFunction() {
    return breaks();
}

function breaks(){
    return 3 + z;
}

function breakAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z;    
        } catch (error) {
            console.error('Error en mi función asíncrona');
            cb(error);
        }
        
    });
}

try {
    breakAsync((err) => {
        console.log('that is to error');
        console.log(err.message);
    });
} catch (error) {
    console.error('something was damaged');
    console.error(error.message);
}
