// class Person{
//     name : string;
//     age : number;

//     constructor(name:string, age:number) {
//         this.name = name
//         this.age = age
//     }

//     greet():void{
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
        
//     }
// }

// const info = new Person("John", 23)
// info.greet()
// console.log(info.age);
// console.log(info.name);


class Employee{
    public name : string
    private salary : number

    constructor(name : string, salary : number) {
        this.name = name
        this.salary = salary
    }

    public getSalary():number{
        return this.salary
    }
}

const emp = new Employee("john", 30000)
console.log(emp.name);
console.log(emp.getSalary());
// console.log(emp.salary);


