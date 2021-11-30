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
let myShop = {
    products: "Soap",
    price: 200,
    place: "Chennai"
};

function checkObj(checkProp) {

    if (myShop.hasOwnProperty(checkProp)){
        return myShop[checkProp];
    }

    else {
        return "Property not found";
    }
}
console.log(checkObj("products"))


let person = {
    name: "Jerin",
    age: 18
}; // Object literal

// updating objects
person.talent = "Programmer"


// deleting a object property
delete person.talent;

// Dot notation
person.name = "Cj";
// Bracket notation
person["age"] = "18";
console.log(person.name);
console.log(person.age);
console.log(person.talent)


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


// Stand in line

function nextInLine(arr, item) {
    arr.push(item);
    arr.shift(item);
    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));   // This JSON.stringify is used to display the array neatly
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// conditional statements

function TrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }

    return "No, it's false";
}

console.log(TrueOrFalse(false))

function compareEqaulity(a, b) {
    if (a == b) {       // if we give two equal to symbol which converts the data type of the b,  but if we give three equal to symbol it does not change the data type
        return "Equal";
    }

    return "Not Equal";
}

console.log(compareEqaulity(10, "10"));


// Strict equality operator

function testStrictNotEqual(val) {
    
    if (val == 50)  {
        return "Half"
        
    }

    else if (val !== 100) {
        return "Not equal"
    }

    else{
        return "Equal"
    }
}

console.log(testStrictNotEqual(50));    // if we use Strict not equal to (!==) so this does not change the data type of the argument what ever we pass where as if we give just not equal to (!=) so this changes the dataType of the argument verymuch 


// Switch statements

function caseInSwitch(newVal) {
    let answer = "";

    switch (newVal) {
        case 1:
            answer = "alpha";
            break;

        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta";
            break;
    
        default:
            return "Enter the correct option"
            break;
    }

    return answer;
}

console.log(caseInSwitch(4));


// nested objects

let myStorage = {
    "car": 
    {
        "inside": 
        {
            "glove box": "maps",
            "passengers seat": "crumbs"
        },

        "outside": 

        {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


// nested array

let myPlants = [
{
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
}, 

{
    type: "trees",
    list: ["oak", "pine", "brich"]
}
];

let secondTree = myPlants[1].list[1];
console.log(secondTree);


// loops
// while loop

let myArray = [];

let i = 0;
while (i < 10) {
    myArray.push(i);
    i++;
}

console.log(myArray);


// For loops
let myArr = [];

for (let i = 0; i < 20; i++) {
    myArr.push(i);
}

console.log(myArr);


// for (let i = 1; i < 10; i+=2) {
//     console.log(i);
// }

// Nesting for loops

function mutiply(arr) {
    let matrix = 1;

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++) {
            matrix *= arr[i][j];
            
        }
    }
    return matrix;
}

let matrixArr = [[1,2], [3,4], [5,6,7]];
console.log(mutiply(matrixArr));