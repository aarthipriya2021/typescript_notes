// number
var userId = 3444.258;
var toExponential = userId.toExponential(5); // Returns a number written in exponential notation
console.log("toExponential of userId - ", toExponential);
var toFixed = userId.toFixed(2); // Returns a number written with a number of decimals
console.log("toFixed of userId - ", toFixed);
var toLocaleString = userId.toLocaleString(); // a number as a string, using local language format
console.log("toLocaleString of userId - ", toLocaleString);
var toPrecision = userId.toPrecision(3); // Returns a number written with a specified length
console.log("toPrecision of userId - ", toPrecision);
var string = userId.toString(); // Returns a number as a string
console.log("toString of userId - ", string);
var valueOf = userId.valueOf(); // Returns a number as a number
console.log("valueOf of userId - ", valueOf);
// boolean
// let isLoggedIn: boolean = false;
// export {}
