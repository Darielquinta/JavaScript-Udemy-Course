/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
-
// Variable name conventions
let jonas_matilda = "JM";

let person = "Jonas";
let PI = 3.14159;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher"; 

console.log(myFirstJob);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = "Quintanilla";
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = 'Dariel';
const lastName = 'Quintanilla';
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x+= 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);


// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);


const firstName = 'Dariel';
const job = 'student';
const birthYear = 2006;
const year = 2037;

const dariel = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(dariel);

const darielNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(darielNew);


const age = 15;

if (age >= 18) {
	console.log('Dariel can start his driving license');
}
else {
	const yearsLeft = 18 - age;
	console.log(`Dariel is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);



// type conversion

const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11', + does coercion of string
n = n - 1; // 10, - does coercion of number
console.log(n); // 10

2 + 3 + 4 + '5'



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Dariel'));
console.log(Boolean({}));

const money = 100;
if(money) {
	console.log("Don't spend it all ;)");
} else {
	console.log("You should get a job!");
}

let height;
if(height) {
	console.log('YAY! Height is defined.');
} else {
	console.log('Height is UNDEFINED');
}


const age = ' 18';
if (age === 18) console.log('You just became an adult! :D (strict)');

if (age == 18) console.log('You just became an adult! :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 6) console.log('Cool! 6 is an amazing number!'); // '6' = 6
else if (favorite === 7) console.log('7 is also a cool number!');
else if (favorite === 9) console.log('9 is also a cool number!');
else console.log('Number is not 23 or 7 or 9!');
	

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive) console.log("Dariel is able to drive!");
// else console.log("Someone else should drive...");

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) console.log("Dariel is able to drive!");
else console.log("Someone else should drive...");



// Coding Challenge #3
// Round One
const dolphinsRoundOne = 97;
const koalasRoundOne = 109;

// Round Two
const dolphinsRoundTwo = 112;
const koalasRoundTwo = 95;

// Round Three
const dolphinsRoundThree = 101;
const koalasRoundThree = 106;

// Avg score
const avgDolphin = Math.round((dolphinsRoundOne + dolphinsRoundTwo + dolphinsRoundThree) / 3);
const avgKoala = Math.round((koalasRoundOne + koalasRoundTwo + koalasRoundThree) / 3);

console.log(avgDolphin, avgKoala);


let winner;
if (avgDolphin > avgKoala && avgDolphin >= 100) winner = "Dolphin";
else if (avgKoala > avgDolphin && avgKoala >= 100) winner = "Koala";
else if (avgKoala === avgDolphin && avgKoala >= 100) winner = "Draw";
else winner = "No one";

console.log(`The winner is: ${winner}!`);




const day = 'thursday';

switch(day) {
	case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
		
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
		
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
		
	case 'friday':
		console.log('Record videos');
		break;
		
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	
	default:
		console.log('Not a valid day!');
}

if(day === 'monday') {
	console.log('Plan course structure');
	console.log('Go to coding meetup');
} else if(day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
	console.log('Write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || 'sunday') {
	console.log('Enjoy the weekend :D');
} else {
	console.log('Not a valid day!');
}


// TERNARY OPERATOR
const age = 23;
const drink = age >= 18 ?  'wine 🍷' : 'water 🚰';
console.log(drink);

// IF STATEMENT
let drink2;
if (age >= 18) {
	drink2 = 'wine 🍷';
} else {
	drink2 = 'water 🚰';
}
console.log(drink2);



let bill = 300;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the final cost that you will pay is ${bill + tip}!`);
*/


let bill = Number(prompt("How much was the bill?"));

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the final cost that you will pay is ${bill + tip}!`);