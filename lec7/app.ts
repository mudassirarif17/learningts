// Type alias is for object and type annotation is for specific variable 
type Person = {
    name : string;
    age : number;
    isStudent : boolean;
    address : {city : string; country : string;}
}

const person : Person = {
    name : "Mudassir",
    age : 256,
    isStudent : true,
    address : {
        city : "Larkana",
        country : "Pakistan"
    }
}

console.log(person);

// Calculate the total price of product

type Product = {
    name : string;
    price : int;
    quantity : int;
}

const product : Product = {
    name : "laptop",
    price : 6000,
    quantity : 6
}

const calculateTotalprice = (product : Product) => {
    return product.price * product.quantity;
}

console.log(calculateTotalprice(product));

// Function Call Signature 
type Student = {
    name : string;
    age : number;
    gender?:string;
    greet : (country : string) => string
}

const student1 : Student = {
    name : "Mudassir",
    age : 56,
    gender : "male",
    greet : (country) => `Welcome my name is ${student1.name} my age is ${student1.age} , my gender is ${student1.gender} and my country is ${country}`
}

console.log(student1.greet("Pakistan"));