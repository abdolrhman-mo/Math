const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const pote = document.querySelector('[data-previous-operand]') // previousOperandTextElement
const cote = document.querySelector('[data-current-operand]') // currentOperandTextElement

function compute(operand) {
    pote.textContent = pote.textContent.replace(operand, "")
    pote.textContent = pote.textContent + ` ${operand} ` + cote.textContent
    switch (operand) {
        case "+":
            cote.textContent = parseInt(pote.textContent) + parseInt(cote.textContent)
            break;
        case "-":
            cote.textContent = parseInt(pote.textContent) - parseInt(cote.textContent)
            break;
        case "*":
            cote.textContent = parseInt(pote.textContent) * parseInt(cote.textContent)
            break;
        case "÷":
            cote.textContent = parseInt(pote.textContent) / parseInt(cote.textContent)
            break;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        cote.textContent = cote.textContent + button.textContent
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        pote.textContent = pote.textContent + cote.textContent + " " + button.textContent + " "
        cote.textContent = ""
        // if (pote.includes(operator)) {
        //     console.log(t)
        // }
    })
})

equalsButton.addEventListener('click', () => {
    if (cote.textContent != "") {
        // determine what's the operation
        operands = ['+', '-', '*', '÷']
        for (let index = 0; index < operands.length; index++) {
            if (pote.textContent.includes(operands[index])) {
                compute(operands[index])
                break
            }
        }
    }
})

deleteButton.addEventListener('click', () => {
    cote.textContent = cote.textContent.slice(0, cote.textContent.length - 1)
})

allClearButton.addEventListener('click', () => {
    cote.textContent = ""
    pote.textContent = ""
})