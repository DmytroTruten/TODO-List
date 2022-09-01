let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make dinner";
let clickme = "Click Me"

let todos = ["Get groceries", "Wash car", "Make dinner"]
todos.push('Another todo')

todos.forEach(function(todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element);
})

function addNewTodo(){
  let textbox = document.getElementById('todo-title')
  let title = textbox.value;
  todos.push(title)
}
