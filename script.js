// // 1a 1b 1c
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmHugs.toUpperCase());
warmHugs = warmhugs.replace("like", "love");
console.log(warmHugs);
// // ===========================
// // 2a 2b
let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18))
// console.log(beenImpaled.slice(18, 36));
// console.log(beenImpaled.slice(-18));
// // ===========================
// // 3a 3b 
let dotDotDot = "...";
let skullBones = `I don’t have a skull${dotDotDot}or bones.`;
console.log(skullBones);
// // ===========================
// // 4a
console.log(Math.PI);
// // ===========================
// // 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.ceil(randomNumber);
console.log(randomNumber);
// let randomNumber = Math.ceil(Math.random() * 3);
// let randomNum = Math.random();
// randomNum *= 3;
// randomNum = Math.floor(randomNum);
// randomNum++;
// console.log(randomNum);
// // ===========================
// // Bonus
// // 6
console.log(" Let It Go!".toUpperCase().repeat(2));
// console.log(" Let It Go!".toUpperCase().repeat(2).trim());
// // ===========================
// // 7
let reindeers = "Reindeers are better than people.";
// console.log(reindeers.replace(/\s/g, "_"));
// console.log(reindeers.replace(/ /g, "_"));
// console.log(reindeers.replaceAll(" ", "_"));
console.log(reindeers.split(" ").join("_"));
// // ===========================
// // 8
// console.log(Math.sqrt(2));
console.log(Math.SQRT2);
// // ===========================
// // 9
// let newRandomNumber = Math.ceil(Math.random() * (23 - 7) + 7);
// console.log(newRandomNumber);
// My numbers were too literal for all the space between the end of 23. The numbers are fixed and not a parameter of an upper or lower boundary of the numbers between, rather the actual 23 and 7 fixed integers and not anything up or down to, but from and to as parameters.
var newRandomNumber = Math.floor (Math.random() * (23-7+1) + 7)
// Integer int property 
// upperBound and lowerBound
// Ceil
// let newRandomNumber = Math.floor(Math.random() * 17) + 7;
// // newRandomNumber *= 17;
// // newRandomNumber = Math.floor(newRandomNumber);
// // newRandomNumber += 7;
// console.log(newRandomNumber);