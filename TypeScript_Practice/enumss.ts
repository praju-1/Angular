enum Direction{
    up = 1,
    down,
    left,
    right
}

let move: Direction = Direction.down;
console.log(move);


enum color{
    first = "RED",
    second = "BLUE",
    third = "GREEN"
}

let colors : color= color.first
console.log(colors);

enum Hetro{
    No = 0,
    Yes = "YES"
}

console.log(Hetro.Yes);


let age : number|string;
age = 21
console.log("Numeric value of age is : ", age);
age = "twenty one"
console.log("string value of age is : ", age);
