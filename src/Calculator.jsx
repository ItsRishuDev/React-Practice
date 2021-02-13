let sum;
let substract;
let multiply;
let divide;

function Sum(a, b){
    sum = a + b
    return sum
}

function Substract(a, b){
    substract = a - b
    return substract
}

function Multipication(a, b){
    multiply = a * b
    return multiply
}

function Division(a, b){
    divide = a / b
    return divide.toFixed(2)   
}

export default Sum;
export {Substract, Multipication, Division};