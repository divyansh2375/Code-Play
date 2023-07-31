// addEventListener(type, listener)
// addEventListener(type, listener, options)
// addEventListener(type, listener, useCapture)

const btn = document.querySelector("#btn1")
const notes1 = document.querySelector(".notes1")
const main = document.querySelector(".main")




var serverURL = "https://api.funtranslations.com/translate/"

function getTranslationURL(text){
    return serverURL + "?" + "text" + text
}

// function errorHandler(error){
//     console.log("error occured" , error);
//     alert("something went wrong ")

// }

function clickHandler() {
    var inputText = notes1.value;
    //calling server from processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    // .catch(errorHandler)
}

btn.addEventListener("click",function(){
    const val = notes1.value;
    console.log(val);
    
 
    console.log("clicked")

    const output = document.createElement("div");
    output.className="output"
    output.innerText = val;
    main.append(output)
   
})
btn.addEventListener("click",clickHandler)