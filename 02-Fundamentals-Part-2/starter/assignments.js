'use strict';
/*
  Functions

function describeCountry(country, population, capitalCity) {
	const countrySummary = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return countrySummary;
}

const america = describeCountry("America", "329", "Washington, DC");
  console.log(`America = ${america}`);

const ukraine = describeCountry("Ukraine", "44", "Kviv");
  console.log(`Ukraine = ${ukraine}`);

const russia = describeCountry("Russia", "144", "Moscow");
  console.log(`Russia = ${russia}`);

  Function Declarations vs. Expressions
  console.log("ROUND 一: FIGHT");
  function percentageOfWorld1(population) {
  	return (population / 7900) * 100;
  }

let americaPop = percentageOfWorld1(329);
let ukrainePop = percentageOfWorld1(44);
let russiaPop = percentageOfWorld1(144);

americaPop = Math.round(americaPop);
ukrainePop = Math.round(ukrainePop);
russiaPop = Math.round(russiaPop);

  console.log(`America's population is: ${americaPop}% of the world population.`);
  console.log(`Ukraine's population is: ${ukrainePop}% of the world population.`);
  console.log(`Russia's population is: ${russiaPop}% of the world population.`);

  console.log("ROUND 二: FIGHT");
const percentageOfWorld2 = function(population) {
	return (population / 7900) * 100;
}

  console.log(`America's population is: ${americaPop}% of the world population.`);
  console.log(`Ukraine's population is: ${ukrainePop}% of the world population.`);
  console.log(`Russia's population is: ${russiaPop}% of the world population.`);

  Arrow Functions
  console.log("ROUND 三: FIGHT");
const percentageOfWorld3 = population => (population / 7900) * 100; 

  console.log(`America's population is: ${americaPop}% of the world population.`);
  console.log(`Ukraine's population is: ${ukrainePop}% of the world population.`);
  console.log(`Russia's population is: ${russiaPop}% of the world population.`);

  Function Calling Other Functions
function describePopulation(country, population) {
	const percentage = percentageOfWorld1(population);
	  console.log(`${country} has ${population} million people, which is about ${percentage}% of the world`);
}

const japanPop = describePopulation("日本","125");
const francePop = describePopulation("フランス", "67");
const germanyPop = describePopulation("ドイツ", "83");

  Introduction to Arrays
  console.log("Introduction to Arrays");
  const populations = [125, 67, 83, 329];
  console.log(populations);

  if (populations.length == 4)  console.log("Happy :)");
  else  console.log("Sad :(");

  const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
  console.log(percentages);

  Basic Array Operations (Methods)
  console.log("Basic Array Operations (Methods)");

const neighbors = ["Russia", "Belarus", "Poland"];
  console.log("Original List");
  console.log(neighbors);

  console.log("New Country");
neighbors.push("Utopia");
  console.log(neighbors);

  console.log("Country Dissolved");
neighbors.pop();
  consolelog(neighbors);

if (!neighbors.includes("Germany")) {
	  console.log("Probably not a central European country :D");
}

neighbors[neighbors.indexOf("Russia")] = "Trashia";
  console.log(neighbors);

  Introduction to Objects
  console.log("Introduction to Objects");

const myCountry = {
	country: "にほん",
	capital: "とうきょう",
	language: "にほんご",
	population: 125,
	
	neighbors: ["かんこく", "ちゅうごく", "ロシア"],
	describe: function() {
		return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
	}
};

  Dot vs. Bracket Notation
  console.log("Dot vs. Bracket Notation");

  console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;

  console.log(`Population: ${myCountry.population} million`);

myCountry['population'] = myCountry.population - 2;

  console.log(`Population: ${myCountry.population} million`);

  Object Methods
  console.log("Object Methods");

  console.log(myCountry.describe());

  Iteration: The For Loop
  for (let voters = 1; voters <= 50; voters++) {
  	console.log(`Voter number ${voters} is currently voting.`);
  }




// Looping Arrays, Breaking, and Continuing
console.log("Looping Arrays, Breaking, and Continuing");

const populations = [125, 67, 83, 329];
const populations2 = [];
	
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

for(let i = 0; i < populations.length; i++) {
	populations2.push(percentageOfWorld1(populations[i]));
}

console.log(populations2);



// Looping Backwards and Loops in Loops
console.log("Looping Backwards and Loops in Loops");

const listOfNeighbors = [
	['Canada', 'Me\["O;/il.,m nb=-]0p987r54e63523145678```[=p-o0iuhgc'], 
	['Spain'], 
	['Norway', 'Sweden', 'Russia']
];

for (let neighbors = 0; neighbors < 6; neighbors++) {
	console.log(`Neighbor: ${listOfNeighbors[neighbors]}`);
}

*/
// The while Loop
console.log("The while Loop");

const populations = [125, 67, 83, 329];
const percentages3 = [];

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

var i = 0;
while(percentages3.length !== populations.length) {
	percentages3.push(percentageOfWorld1(populations[i]));
	i++;
}

console.log(percentages3);


