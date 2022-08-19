let myName = 'Yashasvi';
console.log(myName);

myName ='Keshari';
console.log(myName);

//normal js function
function myFunc(name){
   console.log(name);
}
myFunc('Max');

//Arrow functions
const myFnc =(names)=>{
    console.log(names);
}
myFnc('Yashi');

const myAge =()=>{
    console.log('23');
}
myAge();

const fullName =(fName, lName)=>{
    console.log(fName, lName);
}

fullName('Yashi','Keshari');

const multiply =(number)=>{
    return number * 2;
}
console.log(multiply(2));
// when all is done in function body is return and no other code in there then 
const multi=(number)=> number * 2

console.log(multi(6));