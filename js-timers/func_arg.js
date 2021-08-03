function greet() {
    console.log("HI, You're Cool!")
}

function diss() {   
    console.log("You are the worst")
}

function repeatThreeTimes(func) {
    func();
    func();
    func();
}

function repeat(num, func) {
    for (var i = 0; i < num; i++) {
        func();        
    }
}

//adding function to variable
const myFunc = function add(x,y) {
    return x + y;
}

//Returning functions from functions

function makeMultiplyFunc(num) {
    return function multiply(x) {
        return num * x;
    }
}

const quad = makeMultiplyFunc(4)
const double = makeMultiplyFunc(2)

//Single Threading 

greet();
//This will block the thread and pop up in the browser
alert("I am an alert");
//Once you click ok the rest of the thread will run
diss(); 

greet();
setTimeout(diss, 3000);
greet();

setInterval(diss, 2000)

//Anonymous function

greet();
setTimeout(function() {
    diss();
    diss();
    diss();
}, 1000);
greet();

setTimeout(function() {
    console.log("Meow")
    console.log("Woof")
    console.log("Oink")
}, 3000);

function doTwice(func) {
    func();
    func();
}

doTwice(function () {
    console.log("STOP BOTHERING ME!");
    console.log("Please Go AWAY!");
})

const printOne = function one() {
    console.log(1)
}