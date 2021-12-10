const sides = document.querySelectorAll("input")
const calculate = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");

function calculateArea(){
    const area = sumOfSides();
    // console.log(area)
    var sp = (area/2)
    var areaOfTriangle = sp*(sp-(Number(sides[0].value)))*(sp-(Number(sides[1].value)))*(sp-(Number(sides[2].value)))
    
    output.innerText="The area of the triangle is "+ String(areaOfTriangle**(0.5))
}

function sumOfSides(){
    return Number(sides[0].value) + Number(sides[1].value) + Number(sides[2].value) 
}

calculate.addEventListener("click",calculateArea)
