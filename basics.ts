// Primitives: number, string, boolean 
// More Complex types: array, objects
// Function types, parameters

let age:number;
// let age:number=21; // can assign a value here as well
// let age:Number; // its wrong in TypeScript, it wont give error 
// but this actually points out to the number object in JavaScript.

age = 12
// age = 12.3 // correct
// age = '12' // error

let userName: string;

userName = 'Divisha'

let isIntern: boolean;
isIntern = true;

// More Complex Types

let hobbies: string[]; // this tells typescript we wanna hv array of strings

hobbies = ['Reading','Cooking']

// let person; // it has by default any type- which means standard javascript
let person: {   // object type definition- we are defining the structure of the object
    name: string;
    age: number;
}; 

person = {
    name: 'Divisha',
    age: 21
};
// person = {
//     isEmployee: true
// };

let people: {
    name: string;
    age: number;
}[];