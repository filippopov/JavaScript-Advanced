function subtract() {
    let firstNumberValue = document.getElementById('firstNumber').value;
    let secondNumberValue = document.getElementById('secondNumber').value;
    document.getElementById('result').textContent = Number(firstNumberValue) - Number(secondNumberValue);
}