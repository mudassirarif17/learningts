// Function In ts
// function greet(name:string , id:number):void{
//     console.log(`Welcome ${name} and your id is ${id}`);
// }
// const greet = (name : string , id : number) : void =>{
//     console.log(`Welcome ${name} and your id is ${id}`);
// }
// With return data type
// const greet = (name : string , id : number) : string =>{
//     return `Welcome ${name} and your id is ${id}`;
// }
// console.log(greet("Mudassir" , 1));
// console.log( greet("Arif" , 2));
// const ispalin = (palin : string) : boolean =>{
//     let myPalin = palin.split("").reverse().join("");
//     return myPalin === palin ? true : false;
// }
// console.log(ispalin("maham"));
// console.log(ispalin("anas"));
// Function to return the max Number
// const maxNum = (arr : number[]) : number =>{
//     let mynum = Math.max(...arr);
//     return mynum;
// }
// console.log(maxNum([20,50,60]))
// Function to calculate the average of array
var average = function (arr) {
    var result = arr.reduce(function (a, b) { return (a + b) / arr.length; });
    return result;
};
console.log(average([5, 5, 8]));
