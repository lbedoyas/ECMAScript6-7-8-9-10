let hello = 'Luis';
let world = 'Bedoya';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry \n"
+ "frase epica";

let lorem2 = `otra frase epica
otro reglon
esta es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Luis',
    'age': '34',
    'country': 'CO'
};

let {name, age, country} = person; 

console.log(name, country);

let team1 = ['Jeferson', 'Checho', 'Alexis'];
let team2 = ['Anita', 'Lucho', 'Branner'];

let education = [...team1, ...team2];
console.log(education);

{
    var globalVer = 'Variable Global';
}
{
    let globalLet = 'GlobalLet';
    console.log(globalLet);
}
console.log(globalVer);
//console.log(globalLet);

let name2 = 'Lucho';
let age2 = 32;

//es5
obj = {name2: name2, age2: age2};
//es6
obj2 = {name2, age2};

console.log(obj);
console.log(obj2);

const names = [
    {name: 'Lucho', age: 33},
    {name: 'Lucia', age: 33}
];

let listOfNames = names.map(item => console.log(item.name));

const ListOfName2 = (name, age) => {
    console.log(age);
}


const holaPromesa = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Listo');
        } else{
            reject('Ups!!');
        }
    });
}

holaPromesa()
.then(Response => console.log(Response))
.then(()=> console.log('Hola'))
.catch(error => console.warn(error));

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
 }

 const calc = new Calculator(); 
 console.log(calc.sum(2,2));

import { hello } from './module';

hello();


function* helloWorld(){
    if (true) {
        yield 'Hello, ';        
    }
    if (true) {
        yield 'World';
    }
};

const GeneratorHello = helloWorld();
console.log(GeneratorHello.next().value);
console.log(GeneratorHello.next().value);
console.log(GeneratorHello.next().value);