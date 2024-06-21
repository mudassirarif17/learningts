var person = {
    name: "Mudassir",
    age: 256,
    isStudent: true,
    address: {
        city: "Larkana",
        country: "Pakistan"
    }
};
console.log(person);
var product = {
    name: "laptop",
    price: 6000,
    quantity: 6
};
var calculateTotalprice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalprice(product));
var student1 = {
    name: "Mudassir",
    age: 56,
    gender: "male",
    greet: function (country) { return "Welcome my name is ".concat(student1.name, " my age is ").concat(student1.age, " , my gender is ").concat(student1.gender, " and my country is ").concat(country); }
};
console.log(student1.greet("Pakistan"));
