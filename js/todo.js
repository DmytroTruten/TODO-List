let todos = [{
  title: "Get groceries",
  dueDate: "04-09-2022",
  id: 'id1'
}, {
  title: "Wash car",
  dueDate:" 04-09-2022",
  id: 'id2'
}, {
  title: "Make dinner",
  dueDate: "04-09-2022",
  id: 'id3'
}]

render()

//Creates todo
function createToDo(title, dueDate){
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  })

}

//Deletes todo
function removeToDo(idToDelete) {
  todos = todos.filter(function (todo){
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true
    }
  })
}

function addNewTodo(){
  const textbox = document.getElementById('todo-title')
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker')
  const dueDate= datePicker.value;

  createToDo(title,dueDate)

  render()
}

function deleteTodo(event) {
  const deleteButton = event.target
  const idToDelete = deleteButton.id

  removeToDo(idToDelete)
  render();
}

function render() {
  //reset list
  document.getElementById('todo-list').innerHTML = ''

  todos.forEach(function(todo) {
    
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 20px;'
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id
    element.appendChild(deleteButton)

    const todoList = document.getElementById('todo-list')
    todoList.appendChild(element);
  })
}
