// This is my first javascript code
// console.log("Hello World");


// These are primitive types
let name = "Jerin";   // String literal
console.log(name);
let age = 17;  // Number literal
let isApproved = false   // Boolean literal
let middleName = undefined;
let nickName = null;

var a;
var b = 2;

a = 7;
b = a;


// They cannot be a reserved keyword
// They should be meaningful
// they cannot start with a number (1name)
// They cannot contain a space or a hypen (-)
// Are case-sensitive

// This is called camel notation
let firstName = "Chijith"
let lastName = "Jerin";

let lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

console.log(lastName.length);

// String are immmutable whichh cannot be changed

const intrestRate = 0.3;
console.log(intrestRate);

let num = 2;
num++;
console.log(num);

num--;
console.log(num);


// Reference types

let person = {
    name: "Jerin",
    age: 18
}; // Object literal

// Dot notation
person.name = "Cj";


// Bracket notation
person["age"] = "18";

console.log(person.name);
console.log(person.age);


// Arrays
let selectedColors = ["Red", "Blue"];
selectedColors[2] = 1;
console.log(selectedColors[0]);
console.log(selectedColors.length);
// Arrays are muttable data type


// Functions

// Performing a task
function greet(name, lastName) {
    console.log("Hello there,",name,"",lastName);
}

greet(name,"Cj");


// Calculates a value
function square(number) {
    return number * number
}

console.log(square(2));



// making a simple madlibs game

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    let result = "";
    result = ("The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store"+ " " + myAdverb);
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));


// accesing two dimensional array
// manipulation of arrays
let myVar = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myVar[2][1]);

let ourVar = ["Benny", "Jerin", "Minecraft"];
ourVar.push(["pro", "players"]);
ourVar.pop();  // Removes last element of an array
ourVar.shift();  // Removes the first element of an array
ourVar.unshift("Piglin");  // inserts a new first element to the array 
console.log(ourVar);


let myShoppingList = [["cereal", 3], ["milk", 500], ["bananas", 10], ["eggs", 10]];



// Global scope

let sum;  // this is a global variable 
function add(x, y) {
    sum = x + y;  
    console.log(sum)
}

add(12,12);