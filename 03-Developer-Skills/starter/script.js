// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const measureKelvin = function() {
	const measurement = {
		type: "temp",
		unit: "celsius",
		value: Number(prompt('Degrees celcius:'))
	}
	
	console.log(measurement);
	console.table(measurement);
	// console.log(measurement.value);
	// console.warn(measurement.value);
	// console.error(measurement.value);
	const kelvin = measurement.value + 273;
	return kelvin;
}

console.log(measureKelvin());

*/

const maxTemp1 = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];

console.log(`${maxTemp1[0]}ºC in 1 day, ${maxTemp1[1]}ºC in 2 days, and ${maxTemp1[2]}ºC in 3 days.`);
console.log(`${maxTemp2[0]}ºC in 1 day, ${maxTemp2[1]}ºC in 2 days, ${maxTemp2[2]}ºC in 3 days, ${maxTemp2[3]}ºC in 4 days, and ${maxTemp2[4]}ºC in 5 days. `);

const printForecast = function(arr) {
	let str = ' ';
	for(let i = 0; i < arr.length; i++) {
			str = str + `${arr[i]}ºC in ${i + 1} days ... `;
			// console.log(`${arr[i]}ºC in ${i + 1} days`);
		}
		console.log("..." + str);
	}

printForecast(maxTemp1);
printForecast(maxTemp2);
