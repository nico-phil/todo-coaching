import { createtodoToTable } from "./index";
import { v4 as uuidv4 } from "uuid";

window.addEventListener("load", function () {
  const title = document.getElementById("title");
  const btnSave = document.getElementById("btn-save");
  const descrition = document.getElementById("descrition");
  btnSave.addEventListener("click", handleSubmit, false);

  //   createtodoToTable();
});

function handleSubmit(event) {
  event.preventDefault();
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let titleValue = title.value;
  let descritionValue = descrition.value;
  let id = uuidv4();
  let todoObj = {
    id,
    title: titleValue,
    description: descritionValue,
    status: "Not started",
    date: new Date().toLocaleDateString(),
  };
  todos.push(todoObj);

  // createtodoToTable(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
  window.location.href = "/index.html";

  console.log(titleValue);
}
