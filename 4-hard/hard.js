/*
HARD: Given the information below for Tom and Jerry. 
    Tom - height: 9in      mass: 8 g
    Jerry - height: 10in        mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

let tomHeight = 9;
let tomMass = 8;
let tomBMI = tomMass / (tomHeight **2); // 0.09876543209876543
console.log(`Tom's BMI is ${tomBMI}`);

let jerryHeight = 10;
let jerryMass = 45;
let jerryBMI = jerryMass / (jerryHeight **2); // 0.45
console.log(`Jerry's BMI is ${jerryBMI}`);

let answer = tomBMI > jerryBMI ? true : false // false

console.log(`Is Tom's BMI high than Jerry's? ${answer}`) 