let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make dinner";
let clickme = "Click Me"

function addTodo(todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element);
}
addTodo(todo1);
addTodo(todo2);
addTodo(todo3);