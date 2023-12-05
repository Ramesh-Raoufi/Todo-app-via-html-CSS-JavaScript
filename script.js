const input = document.querySelector("input");
const Btn = document.querySelector("button");
const list = document.querySelector("ul");
let listItem = [];
function addTask() {
  if (!input.value == "") {
    const newItem = document.createElement("li");
    listItem.push(input.value);
    newItem.innerText = input.value;
    input.value = "";
    localStorage.setItem("mylist", JSON.stringify(listItem));
    list.appendChild(newItem);
  } else {
    alert("same task write");
  }
}
Btn.addEventListener("click", addTask);

mylist = JSON.parse(localStorage.getItem("mylist"));
mylist.forEach((element) => {
  const newItem = document.createElement("li");
  newItem.innerText = element;
  list.appendChild(newItem);
});
