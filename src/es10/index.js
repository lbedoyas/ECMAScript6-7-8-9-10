let array = [1,2,3, [1,2,3,[1,2,3]]];

// Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
console.log(array.flat(2));


let array = [1,2,3,4,5];
// Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
console.log(array.flatMap(value => [value, value * 2]));

let hello = `         hola mundo`;

console.log(hello);
console.log(hello.trimStart());


let bye = `hola mundo          `;

console.log(bye);
console.log(bye.trimEnd());


const entries = [["name","Luis"],["age", 34]];
// Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor 
// con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
console.log(Object.fromEntries(entries));


