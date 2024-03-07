function calculateTakeOffsAndLandings() {
	// Empty arrays are created to store daily take-off and landing numbers.
	let dailyTakeOffs = [];
	let dailyLandings = [];

	// Defining variables to store the total number of take-offs and landings.
	let monthlyTakeOffs = 0;
	let monthlyLandings = 0;

	let weather = Math.random(); // Weather forecast
	weather <= 0.3
		? console.log("The weather is bad")
		: console.log("The weather is good");

	// Start a cycle simulating a 30-day month.
	for (let i = 0; i < 30; i++) {
		let takeOff, landing; // Loop value

		// Bad weather scenario
		if (weather <= 0.3) {
			takeOff = Math.floor(Math.random() * (70 - 50 + 0.6) + 50); // // If the weather is bad, aircraft between 50 and 70 take off at 60% and round the decimal to the lower number
			landing = Math.floor(Math.random() * (70 - 50 + 0.4) + 50); // // If the weather is bad, aircraft between 50 and 70 landing at 40% and round the decimal to the lower number
		} else {
			takeOff = Math.floor(Math.random() * (70 - 50 + 1) + 50); // If the weather is good, aircraft between 50 and 70 take off.
			landing = Math.floor(Math.random() * (70 - 50 + 1) + 50); // If the weather is good, aircraft between 50 and 70 take off
		}

		// Assign the daily take-off and landing values stored above to arrays
		dailyTakeOffs.push(takeOff);
		dailyLandings.push(landing);

		// Daily take-off and landing numbers are added to the monthly take-off and landing numbers.
		monthlyTakeOffs += takeOff;
		monthlyLandings += landing;
	}

	// Send Data
	return {
		dailyTakeOffs,
		dailyLandings,
		monthlyTakeOffs,
		monthlyLandings,
	};
}

// Get values inside a function
const { dailyTakeOffs, dailyLandings, monthlyTakeOffs, monthlyLandings } =
	calculateTakeOffsAndLandings();

// Print on screen

// Monthly Total number of take-offs and landings print on screen.
console.log("\nTotal Number of Take-offs:", monthlyTakeOffs);
console.log("Total Number of Landings:", monthlyLandings, "\n");

// Print daily take-off and landing numbers on the screen
for (let j = 0; j < 30; j++) {
	console.log(
		`Day ${j + 1}: Take-offs: ${dailyTakeOffs[j]}, Landings: ${
			dailyLandings[j]
		}`
	);
}
