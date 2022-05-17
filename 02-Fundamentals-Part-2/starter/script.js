'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");



function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`; 
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYeah) {
	return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2  = function (birthYeah) {
	return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);




const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2022 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2006, "Dariel"));
console.log(yearsUntilRetirement(1996, "Yendi"));



function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	
	const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`; 
	return juice;
}

console.log(fruitProcessor(2, 3));


const dolphinsRound1 = 85;
const dolphinsRound2 = 54;
const dolphinsRound3 = 41;

const koalasRound1 = 23;
const koalasRound2 = 34;
const koalasRound3 = 27;

const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;
const avgDolphins = calcAverage(dolphinsRound1, dolphinsRound2, dolphinsRound3);
const avgKoalas = calcAverage(koalasRound1, koalasRound2, koalasRound3);
let winner;

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) winner = "Dolphins";
	else if (avgKoalas >= 2 * avgDolphins) winner = "Koalas";
	else winner = "No one";
	console.log(`${winner} win (${avgDolphins} vs ${avgKoalas})`);
}
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[0] = 'Mark';
console.log(friends);

const dariel = ["Dariel", "Quintanilla", "2037 - 2006", "Teacher", friends];


// Exercise
const calcAge = function(birthYear) {
	return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];  

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


let tip = 0;
function calcTip(bill) {
	if(bill >= 50 && bill <= 300) bill *= 0.15;
	else bill *= 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

for (var i = 0; i < 3; i++) {
	console.log(`Your bill is ${bills[i]}, your tip is ${tips[i]}, and your total is ${total[i]}`);
}



const dariel = {
	firstName: 'Dariel',
	lastName: 'Quintanilla',
	age: 2022 - 2006,
	job: 'programmer',
	friends: ['Jesus', 'Jerry', 'Sixto']
};

console.log(dariel);

console.log(dariel.job);
console.log(dariel['age']);

const nameKey = 'Name';
console.log(dariel['first' + nameKey]);
console.log(dariel['last' + nameKey]);

//

// const interestedIn = prompt("What do you want to know about Dariel? Choose from the following options: First name, last name, age, job, or friends. ");

// if(dariel[interestedIn]) { // undefined is a falsy value
// 	console.log(dariel[interestedIn]);
// } else { // executes when undefined
// 	console.log("Wrong request! Choose from the following options: First name, last name, age, job, or friends.");
// }

dariel.location = 'United States';
dariel['youtube'] = 'Darielquinta';
console.log(dariel);

//

console.log(`${dariel.firstName} has ${dariel.friends.length} friends, and his best friend is called ${dariel.friends[0]}.`);


const dariel = {
	firstName: 'Dariel',
	lastName: 'Quintanilla',
	birthYear: 2006,
	job: 'programmer',
	friends: ['Jesus', 'Jerry', 'Sixto'],
	hasDriversLicense: false,
	
	// calcAge: function() {
	// 	console.log(this);
	// 	return 2022 - this.birthYear;
	// }
	
		
	// calcAge: function() {
	// 	return 2037 - this.birthYear;
	// },
	
	calcAge: function() {
		this.age = 2037 - this.birthYear;
		return this.age;
	},
	
	getSummary: function() {
		return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
	}
};

console.log(dariel.calcAge());

console.log(dariel.calcAge());
console.log(dariel.calcAge());
console.log(dariel.calcAge());

console.log(dariel.getSummary());

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	
	calcBMI: function() {
		this.BMI = this.mass / (this.height ** 2);
		this.BMI = this.BMI.toFixed(2);
		return this.BMI;
	}
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	
	calcBMI: function() {
		this.BMI = this.mass / (this.height ** 2);
		this.BMI = this.BMI.toFixed(2);
		return this.BMI;
	}
};

// Returns a true value if Mark's BMI is greater than John's. False if less than or equal to.
const higherBMI = mark.calcBMI() > john.calcBMI();

let higherLower;

if (mark.calcBMI() > john.calcBMI()) higherLower = "higher"; 
else if (john.calcBMI() > mark.calcBMI()) higherLower = "higher";
else higherLower = "equal to";

// If higherBMI is true, set expression to Mark. If false, set to John.
// If higherBMI is true, set expression to Mark's BMI. If false, set to John's BMI.
// If NOT higherBMI is true, set expression to Mark. If false, set to John. **
// If NOT higherBMI is true, set expression to Mark's BMI. If false, set to John's BMI. **
mark.calcBMI();
console.log(`${higherBMI ? mark.fullName : john.fullName}'s BMI (${higherBMI ? mark.calcBMI() : john.calcBMI()}) is ${higherLower} ${!higherBMI ? mark.fullName : john.fullName}'s (${!higherBMI ? mark.calcBMI() : john.calcBMI()}).`);



for(let rep = 1; rep <= 3; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}



const types = [];
	
for(let i = 0; i < dariel.length; i++) {
	// Reading from dariel array
	console.log(dariel[i], typeof dariel[i]);
	
	// Filling types array
	// types[i] = typeof dariel[i];
	types.push(typeof dariel[i]);
	

}
console.log(types);
	
const years = [1991, 2007, 1969, 2022];
const ages = [];
	
for(let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < dariel.length; i++) {
	if(typeof dariel[i] !== 'string') continue;
	
	console.log(dariel[i], typeof dariel[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < dariel.length; i++) {
	if(typeof dariel[i] === 'number') break;
	
	console.log(dariel[i], typeof dariel[i]);
}



const dariel = [
	'Dariel',
	'Quintanilla',
	2037 - 2006,
	'programmer',
	['Jesus', 'Jerry', 'Sixto'],
];
	
// for(let i = dariel.length - 1; i >= 0; i--) {
// 	console.log(dariel[i]);
// }


for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`--------- Starting exercise ${exercise}`);
	
	
	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
	}
}



// Coding Challenge #4
 
// Arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip() {
	for(let i = 0; i < 10; i++) {
		if(bills[i] >= 50 && bills[i] <= 300) {
			tips.push(bills[i] * 0.15);
		}
		else {
			tips.push(bills[i] * 0.2);
		}
		// console.log(tips[i] + "TIPS");
		// console.log(bills[i] + "BILLS");
		
		totals.push(tips[i] + bills[i]);
	}
}


calcTip();

// console.log(tips);
// console.log(totals);



const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

function calcAverage(arr) {
	// Calculates the average of all number in the given array.
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	total /= arr.length;
	return total;
}

console.log(calcAverage(totals));

*/
 
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	
	if (dice === 6) console.log('Loop is about to end...');
}