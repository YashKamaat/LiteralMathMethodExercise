// // 1a 1b 1c
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmHugs.toUpperCase());
warmHugs = warmhugs.replace("like", "love");
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
// // ===========================
// // 7
let reindeers = "Reindeers are better than people.";
console.log(reindeers.replace(/\s/g, "_"));
// // ===========================
// // 8
// console.log(Math.sqrt(2));
console.log(Math.SQRT2);
// // ===========================
// // 9
let newRandomNumber = Math.ceil(Math.random() * (24 - 7) + 6);
console.log(newRandomNumber);
// Integer int property 
// upperBound and lowerBound
// Ceil