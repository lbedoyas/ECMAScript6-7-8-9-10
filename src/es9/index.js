const obj = {
    name: 'Luis',
    age: 34,
    country: 'CO'
}

let { name, ...all} = obj;
console.log(name, all);
console.log(all);


const obj1 = {
    name: 'Luis',
    age: 34 
}

const objt2 = {
    ...obj1,
    country: 'CO'
}

console.log(objt2)


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('hello world')
        : reject(new Error('Test Error'))
    })
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.warn(error))
.finally(() => console.log('finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2020-10-11');

const year = match[1];
const mouth = match[2];
const day = match[3];
console.log(year + ' algo de espacio   ' + mouth, day);



