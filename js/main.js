


//--CACHED ELEMENT REFERENCES--
const mathResult = document.getElementById('mathResult')
const plusSign = document.getElementById('plus')
const minusSign = document.getElementById('minus')
const inputNum = document.getElementById('inputNum')

//--EVENT LISTENERS--

plusSign.addEventListener('click', additionBtn)
minusSign.addEventListener('click', minusBtn)

function additionBtn() {
    let num = parseInt(mathResult.value) + parseInt(inputNum.value)
    mathResult.value= num
}

function minusBtn() {
    let num = parseInt(mathResult.value) - parseInt(inputNum.value)
    mathResult.value= num
}