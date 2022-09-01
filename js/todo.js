const todos = ["Get groceries", "Wash car", "Make dinner"]

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
