// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = ("Monday 2019-03-18");
let time = ("10:05:34 AM");
let astronautCount = 7;
let astronautStatus = ("ready");
let avgAstronautMassKg = 80.7 ;
let crewMassKg = astronautCount * avgAstronautMassKg ;
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg ;
let fuelTempCelsius = ("-225") ;
let fuelLevel = ("100%") ;
let weatherStatus = ("clear");





// Write code to generate the LC04 report here:
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("\n" + "Date: " + date);
console.log("Time: " + time);
console.log("\n" + "> ASTRONAUT INFO");
console.log("\n" + "* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log("\n" + "> FUEL DATA");
console.log("\n" + "* Fuel temp Celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);
console.log("\n" + "> MASS DATA");
console.log("\n" + "* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log("\n" + "> FLIGHT PLAN");
console.log("\n" + "* Weather: " + weatherStatus);
console.log("\n" + "> OVERALL STATUS");
console.log("Clear for takeoff: YES");



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.