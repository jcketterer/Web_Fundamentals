//Countdown timer 

function countDown(num) {
    let counter = num - 1;

    const interval = setInterval(function () {
        console.log(counter);
        counter--;

        if (counter < 1) {
            clearInterval(interval);
            console.log("DONE!")
        }
    }, 1000);
}

//Random Number Game

function randomGame() {
    let tries = 0;
    let counter = setInterval(function() { 
        num = Math.random(counter);
        console.log(num);
        tries++;
        if (num > .75) {
            clearInterval(counter);
            console.log(`It took ${tries} try/tries`);
        }
    }, 1000)
}

