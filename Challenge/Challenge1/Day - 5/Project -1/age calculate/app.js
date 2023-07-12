const  birthdate = document.getElementById("birthday")
const calculateAge = document.getElementById("btn")
const result = document.getElementById("result")

function calculateAge1(){
    const birthValue = birthdate.value ;
    if (birthValue === ""){
        alert("please enter correct Data")
    }else{
        const age = getAge(birthValue)
        result.innerText = `your age is ${age}  ${age > 1 ? "years old " : " year old"} `
    }
}

function getAge(birthValue){
    const currentDate = new Date();
    const birthDate = new Date(birthValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth()

    return age;
}

calculateAge.addEventListener("click",calculateAge1)