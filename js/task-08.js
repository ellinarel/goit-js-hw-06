const form = document.querySelector(".login-form");

form.addEventListener("submit", func);
function func(event){
    event.preventDefault()
    const email = event.currentTarget.elements.email.value.trim();
    const password = event.currentTarget.elements.password.value;
    const data = {
        email, 
        password,
    }
    email === ""|| password === ""?alert ("не туди жмякнув"): console.log(data);
  
    event.currentTarget.reset()
}

