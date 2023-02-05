const counter = document.querySelector("#counter")
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const value = document.querySelector("#value")

let counterValue = 0;
const onIncrementButtonClick = () =>{value.textContent = counterValue += 1}
const onDecrementButtonClick = () => {value.textContent = counterValue -= 1};
decrement.addEventListener("click", onDecrementButtonClick)
increment.addEventListener("click", onIncrementButtonClick)
