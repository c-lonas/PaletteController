let palettes = document.querySelectorAll('.cpicker');
let buttons = document.querySelectorAll('.control-btn')


// button toggles
function btn0() {
    if (buttons[0].id === "unmuted") {
        palettes[0].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[0].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[0].id = "muted"
    } else {
        palettes[0].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[0].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[0].id = "unmuted"
    } 
}

function btn1() {
    if (buttons[1].id === "unmuted") {
        palettes[1].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[1].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[1].id = "muted"
    } else {
        palettes[1].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[1].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[1].id = "unmuted"
    } 
}

function btn2() {
    if (buttons[2].id === "unmuted") {
        palettes[2].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[2].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[2].id = "muted"
    } else {
        palettes[2].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[2].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[2].id = "unmuted"
    } 
}

function btn3() {
    if (buttons[3].id === "unmuted") {
        palettes[3].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[3].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[3].id = "muted"
    } else {
        palettes[3].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[3].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[3].id = "unmuted"
    } 
}

function btn4() {
    if (buttons[4].id === "unmuted") {
        palettes[4].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[4].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[4].id = "muted"
    } else {
        palettes[4].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[4].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[4].id = "unmuted"
    } 
}

function btn5() {
    if (buttons[5].id === "unmuted") {
        palettes[5].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[5].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[5].id = "muted"
    } else {
        palettes[5].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[5].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[5].id = "unmuted"
    } 
}

function btn6() {
    if (buttons[6].id === "unmuted") {
        palettes[6].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[6].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[6].id = "muted"
    } else {
        palettes[6].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[6].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[6].id = "unmuted"
    } 
}

function btn7() {
    if (buttons[7].id === "unmuted") {
        palettes[7].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[7].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[7].id = "muted"
    } else {
        palettes[7].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[7].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[7].id = "unmuted"
    } 
}

function btn8() {
    if (buttons[8].id === "unmuted") {
        palettes[8].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[8].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[8].id = "muted"
    } else {
        palettes[8].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[8].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[8].id = "unmuted"
    } 
}

// global toggles
function unmuteAll() {
    for (let i = 0; i < palettes.length; i++) {
        palettes[i].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[i].setAttribute('style', 'opacity: 100%; transition: 1s ease;');
        buttons[i].id = "unmuted"
    }
};


function muteAll() {
    for (let i = 0; i < palettes.length; i++) {
        palettes[i].setAttribute('style', 'opacity: 30%; transition: 1s ease; pointer-events:none;');
        buttons[i].setAttribute('style', 'box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -webkit-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); -moz-box-shadow: inset 0 0 35px rgb(255, 0, 98), 0 0 25px rgb(255, 0, 98); transition: 1s ease;');
        buttons[i].id = "muted"
    }
};

