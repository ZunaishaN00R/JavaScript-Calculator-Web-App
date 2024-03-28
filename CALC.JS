function display(val){
    document.getElementById('result').value += val
    return val
}
function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}
function clearScreen(){
    document.getElementById('result').value = ''
}
function backspace() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}
function clearEntry() {
    document.getElementById('result').value = '';
}
function calculatePercentage() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = eval(currentValue + '/100');
}
let memoryValue = 0;
function memoryAdd() {
    let currentValue = document.getElementById('result').value;
    memoryValue += parseFloat(currentValue);
}
function memorySubtract() {
    let currentValue = document.getElementById('result').value;
    memoryValue -= parseFloat(currentValue);
}
function memoryRecall() {
    document.getElementById('result').value = memoryValue;
}
function memoryClear() {
    memoryValue = 0;
}