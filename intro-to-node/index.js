// console.log("hello world");

// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt");

var superHero = require("superheroes");
var superVillain = require("supervillains");

var superHeroName = superHero.random();
var superVillainName = superVillain.random();

console.log("my super hero name is " + superHeroName);
console.log("my super villain name is " + superVillainName);
