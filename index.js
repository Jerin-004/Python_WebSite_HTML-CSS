// This is my first javascript code
// console.log("Hello World");


// These are primitive types
let name = "Jerin";   // String literal
console.log(name);
let age = 17;  // Number literal
let isApproved = false   // Boolean literal
let middleName = undefined;
let nickName = null;


// They cannot be a reserved keyword
// They should be meaningful
// they cannot start with a number (1name)
// They cannot contain a space or a hypen (-)
// Are case-sensitive

// This is called camel notation
let firstName = "Chijith"
let lastName = "Jerin";

const intrestRate = 0.3;
console.log(intrestRate);


// Reference types

let person = {
    name: "Jerin",
    age: 18
}; // Object literal

// Dot notation
person.name = "Cj";

// Braacet notation
person["age"] = "18";

console.log(person.name);
console.log(person.age)
