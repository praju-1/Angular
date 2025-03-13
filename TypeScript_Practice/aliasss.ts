// type stringornumber = string|number;

// let value1 : stringornumber;

// value1 = "hello"
// console.log(value1);
// value1 = 23
// console.log(value1);


type User ={
    name : string;
    age:number;
    isAdmin?:boolean
}

const user:User={
    name:"John",
    age:23,
}
console.log(user);
