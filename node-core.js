//os
//fs
//events
//http
console.log();//a global object
setTimeout()
clearTimeout()
clearInterval()

//window object that we present our global scope
window.console.log()
var message=''
window.message
 //in node we have global instead of window

 global.message


 //Modules

//when you declare a function or a variable its added to the global scope
var sayHello=function(){

}

window.sayHello();//example of a globale function
//we should avoid declaring functions and variables in the globle scope and instead use modules
//every file in node are considered a module






