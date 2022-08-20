//spread is used to spread array elements OR object properties
//const newArray=[...oldArray,1,2]// call all the old array elements and add it to the new array with other elements
//const newObject={...oldObject,newProps:5}

//rest is used to merge a list of functions arguments into an array
//function sortArgs(...args){
//    return args.sort();
//}

//spread
 let number=[1,2,3];
 let newNumber=[...number,4,5];

 console.log(newNumber);

 const person ={
    age:'23',
    name:'Shubham'
 };

 const newPerson={
    ...person,
    gender:'male'
 };

 console.log(newPerson);

 //rest

 const array = (...args) => {
    //return args.sort();
    return args.filter(el => el === 1);
 }

 console.log(array(1,9,6,3));
