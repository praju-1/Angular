// function to print hello

function greet() : string{
    return "Hello"
}
console.log( greet());


// function to add two numbers
function add(a:number, b:number, c?:number):number{
    return a + b + (c || 30)
}
console.log(add(10, 30, 50));

// function to calculate the power of  number
function pow(value:number, exp :number=2){
    return value ** exp
}

console.log(pow(2, 4));


// function to calculate the addition of multiple numbers

function sum(...a:number[]):number{
    return a.reduce((total, current)=>total+current, 0)
}

console.log(sum(1, 2, 3));
console.log(sum(10, 29, 30, 33344));
console.log(sum());

