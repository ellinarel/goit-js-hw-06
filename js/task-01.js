const numofli = document.querySelectorAll(".item")
console.log("Number of categories:",numofli.length)
const listCategories = document.querySelector("#categories");
for (let num of numofli) {
  console.log("Category:", num.firstElementChild.textContent);
  console.log("Elements:", num.lastElementChild.children.length);
}