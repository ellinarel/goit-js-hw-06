const textInput = document.querySelector("#validation-input")

textInput.addEventListener("blur", event => { 
    textInput.classList.remove("valid", "invalid")
textInput.value.length === Number(textInput.dataset.length) ? 
     textInput.classList.add("valid") : textInput.classList.add("invalid");
})