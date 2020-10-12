const data = {
    frontEnd: 'Luis',
    backEnd: 'Lucia',
    design: 'Horus'
}

const entries = Object.entries(data);
console.log(entries);

const values = Object.values(data);
console.log(values);


const holaMundo = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Hola Mundo'), 5000)
        : reject(new Error('Error prueba'))
    })
};

const holaAsync = async () => {
    const hola = await holaMundo();
    console.log(hola);
}

holaAsync();

const anotherFunction = async () => {
    try {
        const hola = await holaMundo();
        console.log(hola);
    } catch (error) {
        console.warn(error);
    }
}
anotherFunction();