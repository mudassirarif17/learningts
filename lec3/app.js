// Understanding about Type Annotation
// let favNum : number = 25;
// let myage : number = 22;
// let pi : number = 3.14;
// let mynegval : number = -5;
// let myName : String = "Mudassir";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// let invalidresult : number = myage + "years";
// let invalidValue : number = "123";
// let computedVal : number = Math.sqrt(16) 
// let nanValue : number = NaN; 
// console.log(favNum);
// console.log(myName);
// console.log(favNum.toString());
// console.log(nanValue);
// String
var myFullName = "Mudassir Arif";
var myFirstName = "Mudassir";
var myLastname = "Arif";
var message = "Hello TS";
var request = "Please Follow me";
var requestLen = request.length;
var requestUpper = request.toUpperCase();
var requestLower = request.toLowerCase();
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
var num2;
num2 = 2;
num2 = "Mudassir";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts/1")];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
function processData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    if (typeof data === "object") {
                        console.log(data);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
