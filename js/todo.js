const todos = [{
  title: "Get groceries",
  dueDate: "04-09-2022",
}, {
  title: "Wash car",
  dueDate:" 04-09-2022",
}, {
  title: "Make dinner",
  dueDate: "04-09-2022",
}]

render()

function addNewTodo(){
  const textbox = document.getElementById('todo-title')
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker')
  const dueDate= datePicker.value;
  todos.push({
    title: title,
    dueDate: dueDate,
  })

  render()
}

function render() {
  //reset list
  document.getElementById('todo-list').innerHTML = ''

  todos.forEach(function(todo) {
    const todoList = document.getElementById('todo-list')
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;
    todoList.appendChild(element);
  })
}
