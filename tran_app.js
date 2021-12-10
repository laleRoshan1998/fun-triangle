const inputs = document.querySelectorAll(".angle-input");
const istriangleBtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180) {
        outputElement.innerText=("yesss, The angles formm Triangle")
    } else {
        outputElement.innerText=("Oh no, The angles don't form a triangles")
    }
    
}

istriangleBtn.addEventListener("click",isTriangle)




