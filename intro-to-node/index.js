// console.log("hello world");

// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt");

// require npm modules
var superHero = require("superheroes");
var superVillain = require("supervillains");

 // assign random superhero name
var superHeroName = superHero.random();
 // assign random supervillain name
var superVillainName = superVillain.random();

console.log("my super hero name is " + superHeroName);
console.log("my super villain name is " + superVillainName);
