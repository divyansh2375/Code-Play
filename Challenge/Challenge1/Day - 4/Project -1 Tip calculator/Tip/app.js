const bill = document.getElementById("bill")
const tip = document.getElementById("tip")
const calculate = document.getElementById("calculate")
const total = document.getElementById("total")
const inputs = document.querySelectorAll("input")

function calculateT (){
    const billVal = bill.value ;
    const tipVal = tip.value ;
    const totalVal = billVal*(1+ tipVal/100)
    total.innerHTML = totalVal;
}
calculate.addEventListener("click",calculateT)