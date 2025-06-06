class Student{
    private name : string;
    private age : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age
    }

    public getName():string{
        return this.name
    }

    public setName(name:string):void{
        this.name = name
    }

    public setAge(age:number):void{
        if (age > 0){
            this.age = age
        }else{
            console.log("Please enter a valid age!!");
            
        }
    }

    public getStudentInfo():string{
        return `Student name : ${this.name} and age is : ${this.age}`
        
    }
}

const std = new Student("John", 23)
console.log(std.getStudentInfo());

console.log(std.getName());

std.setName("Smith")
std.setAge(-21)

console.log(std.getStudentInfo());