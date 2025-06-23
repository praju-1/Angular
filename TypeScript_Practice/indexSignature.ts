interface Properties{
    [key : string] : number
}

type PropertyKeys = keyof Properties

function printProperty(properties : Properties, Property:PropertyKeys){
    console.log(`${Property} : ${properties[Property]}`); 
}

const data : Properties={
    age : 21,
    contact : 12344,
    weight :  50
}

printProperty(data, "age")
printProperty(data, "contact")
printProperty(data, "weight")