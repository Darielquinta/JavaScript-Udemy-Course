/*
// Practice Assignment 1
console.log("Assignment 1");

const country = "United States of America";
const continent = "North America";
let population = 329;


console.log(country);
console.log(continent);
console.log(population);

// Practice Assignment 2

console.log("Assignment 2");

const island = false;
const language = "English";

console.log(typeof island);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

// Practice Assignment 4
console.log("Assignment 4");

const halfPop = 164;
console.log(halfPop);

population + 1;
console.log(population);

const finlandPop = '6,000,000';
console.log(population >= finlandPop);

const avgPop = '33,000,000';
console.log(population <= avgPop);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

// Practice Assignment 5
console.log("Assignment 5");

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(descriptionNew);

// Practice Assignment 6
console.log("Assignment 6");

if(population >= '33,000,000') {
	console.log(`${country}'s population is above average`);
} else {
	console.log(`${country}'s population is ${population - 33} million below average`);
}

// Practice Assignment 7
console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);

 * 1. 4
 * 2. 617
 * 3. 23
 * 4. False
 * 5. 1143


// Equality Operators: == vs ===
// let numNeighbors = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbors === 1) console.log('Only 1 border!');
// else if (numNeighbors > 1) console.log('More than 1 border!');
// else console.log('No borders!');

*/
// Logical Operators
let country = "United States of America";
const continent = "North America";
let population = 329; // 329

if (country === "United States of America") country = "the United States of America";

const island = false;
const language = "English";

let isEnglish;
if (language === "English") isEnglish = true;
else isEnglish = false;

let isSmallPop;
if (population < 50) isSmallPop = true;
else isSmallPop =- false;

let isIsland;
if (!island) isIsland = true;
else isIsland = false;

if (isEnglish && isSmallPop && isIsland) console.log(`You should live in ${country} :)`);
else console.log(`${country} does not meet your criteria :(`);

country = "United States of America";



// The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average!`);