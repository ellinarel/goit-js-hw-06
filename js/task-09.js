const textcolor = document.querySelector(".color")
const changecolor = document.querySelector(".change-color")


function getRandomHexColor() {
  return document.body.style.background = `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

changecolor.addEventListener("click", ()=>{
  document.body.style.backgroundColor = getRandomHexColor();
  textcolor.textContent =  document.body.style.backgroundColor
}
)
