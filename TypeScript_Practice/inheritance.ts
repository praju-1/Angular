class Animal{
    name : string

    constructor(name:string) {
        this.name = name
    }

    move(distance:number=0){
        console.log(`${this.name} moved ${distance} meters`);
        
    }
}


class Dog extends Animal{
    bark(){
        console.log("Woof woof");
        
    }
}

const d = new Dog("Buddy")
d.bark()
d.move()