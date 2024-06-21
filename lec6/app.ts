const person : {
    name : string;
    age : int;
    gender?:string;
    isStudent:boolean;
    address : {
        city : string;
        country : string
    }
} = {
    name : "Mudassir",
    age : 252,
    gender : "male",
    isStudent : true,
    address : {
        city : "shaikhopora",
        country : "Pakistan"
    }
}

person.address.country = "Pakistan";
console.log(person);
