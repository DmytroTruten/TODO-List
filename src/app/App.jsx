import { Button, Container, Image } from "react-bootstrap";
import Header from "../components/Header/Header";
import { AddToDo, ToDoItem } from "../components/ToDo/ToDo";
import ThemeToggle from "../assets/ThemeToggle.svg";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect } from "react";
import { selectToDo, deleteAllToDo } from "./ToDoSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App/App.css";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toDoState = useSelector(selectToDo);
  const dispatch = useDispatch();
  const savedToDoList = JSON.parse(localStorage.getItem("todo-list")).todo
    .toDoListState;

  useEffect(() => {
    localStorage.setItem("todo-now-theme", JSON.stringify(theme));
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    const savedTheme = theme === "dark" ? "light" : "dark";
    setTheme(savedTheme);
  };

  const handleDeleteAllToDo = () => {
    dispatch(deleteAllToDo());
  };

  return (
    <Container
      fluid
      className="inner-root d-flex flex-column justify-content-center"
    >
      <span className="inner-root__stripe inner-root__stripe_top"></span>
      <Image
        src={ThemeToggle}
        className="inner-root__theme-toggle"
        onClick={handleSwitchTheme}
      />
      <Header />
      <Container className="todo-container d-flex flex-column align-items-center px-5 py-2">
        {savedToDoList.map((todo, index) => (
          <ToDoItem key={index} index={index} />
        ))}
        <AddToDo />
        {toDoState.length !== 0 && (
          <Button className="todo-container__delete-all-btn mt-4" onClick={handleDeleteAllToDo}>Delete all To-Do's</Button>
        )}
      </Container>
      <span className="inner-root__stripe inner-root__stripe_bottom"></span>
    </Container>
  );
}

export default App;
