let inputbox = document.getElementById("input");
let listContainer = document.querySelector(".list-container");

function addProject() {
  if (inputbox.value === "") {
    alert("You Must Write Something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    return li;
  }
  inputbox.value = "";
}
listContainer.addEventListener(
  "click",
  function (e) {  
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
