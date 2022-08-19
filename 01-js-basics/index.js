//console.log('Hellow World');
let name = 'Yashi';
console.log(name);

//Can not be reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain space or -
//Case sensitive

let firstName = 'Yashasvi';
let middleName, lastName;

let interestRate = 0.3;
interestRate =1;
console.log(interestRate);

//to make it fix
//const interestRate1= 0.3;
//interestRate1 =2;
//console.log(interestRate1);

//primitive type

let callName ='Yashi'; //String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let hmm = undefined; //undefined
let color = null; //object

//js is dynammic language in this type of variable can be change at runtime in static it doesn't change
//on console 
// typeOf name returns string 
//name=1;
//return 1
//typeOf name returns number now

//reference type object array & function
//object 

let person = {
    name:'Shubham',
    age: 22
};
console.log(person);
//Change name
//Dot notation
person.name ='Satyawali';
console.log(person.name);

//bracket notation
person['name'] = 'Keshari';

 console.log(person['name']);