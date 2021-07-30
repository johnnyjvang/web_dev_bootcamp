node.js 

- not a framework 
- allows javascript to work or execute using your computer versus web browswer 
- npm = node package manager 

javascript file: app.js 
execute using node: node app.js (note must be directory) 

- node.js is non-blocking ayschronous
	- this means it can run various task, does not wait for a task to finish before starting a new request 

- huge open source, can install other people's modules (node.js) files 
	- this is kind of like python, you just need to install and not copy/paste code which is good 
	- npm init (filename) 

- node.js is good because you do not need to learn another language to develop backend

const mod = require('module name') - acts a bit like a class variable 
mod.function(); 

install node.js 
https://nodejs.org/en/download/ (windows/mac/linux) 
node --version (check for version in cmd) 

npm init
	- initalize a package file 
	- will create a package.json 
	- will show you which modules you have installed/created

npm install --save superheroes (note this is text sensitive) - you do not need to have --save 
	- once installed, will show a new dependencies in your package.json file 

npm install supervillains 