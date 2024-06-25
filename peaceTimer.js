let twentySecBtn = document.getElementById("twentySecondsBtn");
let thirtySecBtn = document.getElementById("thirtySecondsBtn");
let fortySecBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");

let paraEle = document.getElementById("timerText");
let clicked = 0;
let uniqueId1;
let uniqueId2;
let uniqueId3;
let uniqueId4;

twentySecBtn.onclick = function() {
    if (clicked === 2) {
        clearInterval(uniqueId2);
    } else if (clicked === 3) {
        clearInterval(uniqueId3);
    } else if (clicked === 4) {
        clearInterval(uniqueId4);
    }
    clicked = 1;
    let counter = 20;
    uniqueId1 = setInterval(function() {
        paraEle.textContent = counter + " seconds left";
        counter = counter - 1;
        if (counter === -1) {
            clearInterval(uniqueId1);
            paraEle.textContent = "Your moment is complete";
        }
    }, 1000);

}

thirtySecBtn.onclick = function() {
    if (clicked === 1) {
        clearInterval(uniqueId1);
    } else if (clicked === 3) {
        clearInterval(uniqueId3);
    } else if (clicked === 4) {
        clearInterval(uniqueId4);
    }
    clicked = 2;
    let counter = 30;
    uniqueId2 = setInterval(function() {
        paraEle.textContent = counter + " seconds left";
        counter = counter - 1;
        if (counter === -1) {
            clearInterval(uniqueId2);
            paraEle.textContent = "Your moment is complete";
        }
    }, 1000);
}

fortySecBtn.onclick = function() {
    if (clicked === 1) {
        clearInterval(uniqueId1);
    } else if (clicked === 2) {
        clearInterval(uniqueId2);
    } else if (clicked === 4) {
        clearInterval(uniqueId4);
    }
    clicked = 3;
    let counter = 40;
    uniqueId3 = setInterval(function() {
        paraEle.textContent = counter + " seconds left";
        counter = counter - 1;
        if (counter === -1) {
            clearInterval(uniqueId3);
            paraEle.textContent = "Your moment is complete";
        }
    }, 1000);
}

oneMinuteBtn.onclick = function() {
    if (clicked === 1) {
        clearInterval(uniqueId1);
    } else if (clicked === 2) {
        clearInterval(uniqueId2);
    } else if (clicked === 3) {
        clearInterval(uniqueId3);
    }
    clicked = 4;
    let counter = 60;
    uniqueId4 = setInterval(function() {
        paraEle.textContent = counter + " seconds left";
        counter = counter - 1;
        if (counter === -1) {
            clearInterval(uniqueId4);
            paraEle.textContent = "Your moment is complete";
        }
    }, 1000);
}
