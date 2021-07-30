function sayHello(name){
  console.log('hello, my name is ' + name);
}

var value = "";
// this does not work b/c variables are exclusive per js script
console.log(global.value);

sayHello("JONIWONI")
