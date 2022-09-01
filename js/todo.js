let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make dinner";
let clickme = "Click Me"

const todos = ["Get groceries", "Wash car", "Make dinner"]
todos.push('Another todo')

render()

function addNewTodo(){
  const textbox = document.getElementById('todo-title')
  const title = textbox.value;
  todos.push(title)
  render()
}

function render() {
  //reset list
  document.getElementById('todo-list').innerHTML = ''

  todos.forEach(function(todoTitle) {
    const todoList = document.getElementById('todo-list')
    const element = document.createElement('div');
    element.innerText = todoTitle;
    todoList.appendChild(element);
  })
}
