//numbers
const numbers = document.querySelectorAll(".number")
console.log(numbers)

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(number)
        console.log("number is pressed")
        console.log(event.target.value)
        updateScreen(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })

})

//screen
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//variables
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//operator 
const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        //console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

//input operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

//calculate/tanda=
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    //console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

//tombolAC
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    //console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

//decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    //console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//inputdecimal
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}