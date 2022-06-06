let colorCode = document.getElementById("rgb-color");
let answerEl = document.getElementById("answer");
const newColorBtn = document.getElementById("new-color-btn");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const boxArray = [box1, box2, box3, box4, box5, box6];
let randomInt;



function generateColorNumb() {
    let numb1 = Math.floor(Math.random()*1000 * (255/999)).toString();
    let numb2 = Math.floor(Math.random()*1000 * (255/999)).toString();
    let numb3 = Math.floor(Math.random()*1000 * (255/999)).toString();
    return "rgb" + "(" + numb1 + "," + numb2 + "," + numb3 + ")";
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setBackGround(element, color) {
    element.style.backgroundColor = color;
}

function generateRandomBox() {
    let n = Math.floor(Math.random()*10*(5/9));
    return n;
}

function checkAnswer(guess) {
    if(guess === randomInt) {
        answerEl.textContent = "Correct";
    }else{
        answerEl.textContent = "Incorrect";
    }
}

newColorBtn.addEventListener("click", ()=>{
    let answer = generateColorNumb();
    randomInt = generateRandomBox();
    colorCode.textContent = answer; 

    for(i=0; i<boxArray.length; i++) {
        if(i === randomInt) {
            boxArray[i].style.background = answer;
        }
        else{
            boxArray[i].style.backgroundColor = generateColorNumb();
        }
    }

    answerEl.textContent = "";
});

box1.addEventListener("click", ()=> {
    checkAnswer(0);
});

box2.addEventListener("click", ()=> {
    checkAnswer(1);
});

box3.addEventListener("click", ()=> {
    checkAnswer(2);
});

box4.addEventListener("click", ()=> {
    checkAnswer(3);
});

box5.addEventListener("click", ()=> {
    checkAnswer(4);
});

box6.addEventListener("click", ()=> {
    checkAnswer(5);
});

newColorBtn.click();