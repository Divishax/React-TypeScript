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

// New: Type Allias
type Person = {
    name: 'Divisha',
    age: 21
};

// let person; // it has by default any type- which means standard javascript
let person: Person;   // object type definition- we are defining the structure of the object
 

person = {
    name: 'Divisha',
    age: 21
};
// person = {
//     isEmployee: true
// };

// let people: {
//     name: string;
//     age: number;
// }[];
let people: Person[];

// Type Inference 

let course = "React Course"
// course = 1234;
// why are we getting this error, since we didnt assign any type here
// ans- typecript by default tries to infer as many type as possible



// Union type

// A union type is a type definition that allows more than one type.

let courseNew: string | number = "React Course"
courseNew = 1234;



// Functions & Types

// when we talk about functions there are diff places where types can be assigned

// function addNew (a:number,b:number){
//     return a+b; // type inference is happening here in return type
// }
function addNew (a:number,b:number):number {
    return a+b;
}

function printOutput(value:any){ // void
    console.log(value);
}



// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1); // [-1,1,2,3]
// here updatedArray is 'any' => TS dont know 