/*
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
*/
 
// ===============================
// JavaScript Date Constructor Demo
// ===============================

console.log("1. new Date()");
console.log(new Date());
console.log("--------------------------");

console.log("2. new Date(value)  // milliseconds since 1 Jan 1970");
console.log(new Date(0));
console.log(new Date(1000));
console.log("--------------------------");

console.log("3. new Date(dateString)");
console.log(new Date("2025-12-17"));
console.log(new Date("December 17, 2025"));
console.log("--------------------------");

console.log("4. new Date(dateObject)");
let originalDate = new Date();
let copiedDate = new Date(originalDate);
console.log(copiedDate);
console.log("--------------------------");

console.log("5. new Date(year, monthIndex)");
console.log(new Date(2025, 0)); // January (monthIndex starts from 0)
console.log("--------------------------");

console.log("6. new Date(year, monthIndex, day)");
console.log(new Date(2025, 0, 15));
console.log("--------------------------");

console.log("7. new Date(year, monthIndex, day, hours)");
console.log(new Date(2025, 0, 15, 10));
console.log("--------------------------");

console.log("8. new Date(year, monthIndex, day, hours, minutes)");
console.log(new Date(2025, 0, 15, 10, 30));
console.log("--------------------------");

console.log("9. new Date(year, monthIndex, day, hours, minutes, seconds)");
console.log(new Date(2025, 0, 15, 10, 30, 45));
console.log("--------------------------");

console.log("10. new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)");
console.log(new Date(2025, 0, 15, 10, 30, 45, 500));
console.log("--------------------------");

console.log("11. Date()  // WITHOUT new");
var d = Date();
console.log(d);
console.log("Type of d:", typeof d);
console.log("--------------------------");

console.log("12. Date.now()");
console.log(Date.now());
console.log("--------------------------");


