// Understanding about Type Annotation
// let favNum : number = 25;
// let myage : number = 22;
// let pi : number = 3.14;
// let mynegval : number = -5;
// let myName : String = "Mudassir";

// let invalidresult : number = myage + "years";
// let invalidValue : number = "123";
// let computedVal : number = Math.sqrt(16) 
// let nanValue : number = NaN; 

// console.log(favNum);
// console.log(myName);

// console.log(favNum.toString());
// console.log(nanValue);



// String
let myFullName : string = "Mudassir Arif";
let myFirstName : string = "Mudassir";
let myLastname : string= "Arif";
let message : string = "Hello TS"
let request : string = "Please Follow me";
let requestLen : number = request.length;
let requestUpper : string = request.toUpperCase();
let requestLower : string = request.toLowerCase();

// console.log(myFirstName + myLastname);
// console.log(message);
// console.log(requestLen)
// console.log(requestUpper);
// console.log(requestLower);


// let longStr : string = "My name is Mudassir my father name is arif";
// console.log(longStr)
// let shortStr : string = longStr.slice(0,20);
// console.log(shortStr);


// let msg1 : string = "kese ho bhai";
// let msg2 : string = "kese ho bhai";
// console.log(msg1 == msg2);


// let product : string = "laptop";
// let price : number = 20000;
// console.log(`Products is ${product} and price is $${price}`);

// Lec 5 

// Boolean
// let b1 : boolean = true;
// let b2 : boolean = false;
// console.log(b1);
// console.log(b2);

// function isEven(num : number) : boolean {
//     return num % 2 == 0 ? true : false;
// }
// console.log(isEven(4));
// console.log(isEven(5));


// const isDivisibleBy4and8 = (num : number) : boolean =>{
//     return num%4 == 0 && num%8 == 0 ? true : false;
// }
// console.log(isDivisibleBy4and8(16));
// console.log(isDivisibleBy4and8(15));


// Lec 6 
// console.log(Number.MIN_SAFE_INTEGER);
// let bg : bigint = 9007199254740991n;
// console.log(bg);
// let anotherbg = BigInt("9007199254740991");
// console.log(anotherbg);

// console.log(bg + anotherbg);

// lec 6
// ANY use case of any is working with dynamic data when migrating any existing js project to Ts 
// let ourNum :any = 45;
// ourNum = "Mudassir";


// UnKnown is safer than any 
let num2 : unknown ;
num2 = 2;
num2 = "Mudassir";
num2 = true;

if (typeof num2 === "number") {
    console.log(num2);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}

// async function fetchData() : Promise<unknown> {
//     let result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     result = await result.json();
//     return result;
// }

// async function  processData() {
//     let data : unknown = await fetchData();
//     if(typeof data === "object"){
//         console.log(data);
//     }
    
// }

