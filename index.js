// Calculator
const amountInputValue = document.getElementById("amount-input");
const termInputValue = document.getElementById("term-input");
const interestInputValue = document.getElementById("interest-input");
const calculatorBtn = document.getElementById("caculate-btn");
const emptyDiv = document.getElementById("empty-div");
const completedDiv = document.getElementById("completed-div");
const repaymentResult = document.getElementById("repayments-p");
const totalResult = document.getElementById("repay-p");
const clearBtn = document.getElementById("clear-btn");

calculatorBtn.addEventListener('click', () => {
    if (termInputValue.value === '' || interestInputValue.value === '' || amountInputValue.value === '') {
        window.alert("Insira valores válidos")
    } else {
        emptyDiv.style.display = 'none';
        completedDiv.style.display = 'block';
        let repay = amountInputValue.value * (interestInputValue.value / 12);
        let total = amountInputValue.value * (interestInputValue.value / 12) * termInputValue.value;

        const repayFormatado = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'EUR'
        }).format(repay);

        const totalFormatado = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'EUR'
        }).format(total);

        repaymentResult.textContent = `${repayFormatado}`
        totalResult.textContent = `${totalFormatado}`
        // console.log(termInputValue.value);
        // console.log(interestInputValue.value);
        // console.log(amountInputValue.value);
    }
})

clearBtn.addEventListener('click', () => {
    amountInputValue.value = '';
    termInputValue.value = '';
    interestInputValue.value = '';
})

// End of Calculator

// CSS
const amoutInput = document.querySelector(".amount-input-container");
const amoutInputSpan = document.getElementById("amount-input-span");

amoutInput.addEventListener('mouseover', () => {
    amoutInput.style.border = '1px solid var(--Lime)';
    amoutInputSpan.style.backgroundColor = 'var(--Lime)';
    amoutInput.style.cursor = 'pointer'
    amoutInputSpan.style.cursor = 'pointer'
})

amoutInput.addEventListener('mouseout', ()=> {
    amoutInput.style.border=  '1px solid var(--Slate900)';
    amoutInputSpan.style.backgroundColor = 'var(--Slate100)';
})

const repaymentDiv = document.getElementById("repayment-div");
const repaymentRadio = document.getElementById("repayment-radio");

const interestOnlyDiv = document.getElementById("interest-only-div");
const interestOnlyRadio = document.getElementById("interest-only-radio");

repaymentRadio.addEventListener('click', ()=> {

    if (repaymentRadio.checked) {
        repaymentDiv.style.backgroundColor = 'var(--Lime2)';
        interestOnlyDiv.style.backgroundColor = 'white';
    }
})

interestOnlyRadio.addEventListener('click', ()=> {

    if (interestOnlyRadio.checked) {
        interestOnlyDiv.style.backgroundColor = 'var(--Lime2)';
        repaymentDiv.style.backgroundColor = 'white';
    }
})

// End of CSS
