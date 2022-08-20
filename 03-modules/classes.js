class Person{
    name ='Yashi' //property
    call=()=>{} //method
}

const myName = new Person()
myName.call()


//inheritance
//class Person extends Master

//ES6
class Gender{
    constructor(){
        this.gender='Female';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Name extends Gender{
    constructor(){
        super();
        this.name='Yashi';
        //or this.gender='Female';
    }

    printName(){
        console.log(this.name);
    }
}

const name =new Name();
name.printName();
name.printGender();

//next generation js syntax for classes, properites & methods ES7

myAge ='23';

myMethod=()=>{

}

class Human{
    gender='female';

    printGender =()=> {
        console.log(this.gender);
    }
}

class Age extends Human{
    age='23';

    printAge = () => {
        console.log(this.age);
    }
}

const age =new Age();
age.printGender();
age.printAge();

