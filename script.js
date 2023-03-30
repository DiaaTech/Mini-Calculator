// Variables
let firstNumber = document.querySelector('.firstNumber')
let secondNumber = document.querySelector('.secondNumber')
let inputOption = document.getElementById('operation')
let submitButton = document.querySelector('.submit')
let result = document.querySelector('.resultText')

// Function to check correct number and return response in true/false
const checkNumber = function (number) {
  if (number != '') return true
  return false
}
// Functions
const calculator = function (e) {
  e.preventDefault()
  // 1. Check if user enters the number
  let checkFirstNumber = checkNumber(firstNumber.value)

  if (checkFirstNumber == false) {
    result.innerHTML = `Enter First Number 😟`
    return
  }

  let checkSecondNumber = checkNumber(secondNumber.value)

  if (checkSecondNumber == false) {
    result.innerHTML = 'Enter Second Number 😟'
    return
  }

  // 2. Check for operation
  let operation = inputOption.value
  if (operation === 'add') {
    result.innerHTML = Number(firstNumber.value) + Number(secondNumber.value)
  } else if (operation === 'minus') {
    result.innerHTML = Number(firstNumber.value) - Number(secondNumber.value)
  } else if (operation === 'multiply') {
    result.innerHTML = Number(firstNumber.value) * Number(secondNumber.value)
  } else if (operation === 'division') {
    result.innerHTML = Number(firstNumber.value) / Number(secondNumber.value)
  } else if (operation === 'power') {
    result.innerHTML = Number(firstNumber.value) ** Number(secondNumber.value)
  } else {
    result.innerHTML = 'Invalid operation 😟'
  }
}

// Event Listeners
submitButton.addEventListener('click', calculator)
