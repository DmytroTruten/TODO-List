import React, { useContext, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import PlusIcon from "../../assets/Plus.svg";
import ToDoRectangleIcon from "../../assets/ToDoRectangle.svg";
import ToDoRectangleDarkIcon from "../../assets/ToDoRectangleDark.svg";
import DrawerIcon from "../../assets/Drawer.svg";
import DrawerDarkIcon from "../../assets/DrawerDark.svg";
import "../../styles/ToDo/ToDo.css";
import { createToDo, addToDo } from "../../app/ToDoSlice";
import { useDispatch } from "react-redux";

export function ToDoItem({index}) {
  const { theme } = useContext(ThemeContext);
  const [toDoRectangleOpened, setToDoRectangleOpened] = useState(false);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      dispatch(addToDo({ index, text: inputText }));
    }
  };

  return (
    <Container
      className={`todo-container__todo d-flex align-items-center justify-content-between pe-0 ${
        toDoRectangleOpened ? "opened" : ""
      }`}
    >
      <form
        onSubmit={handleFormSubmit}
        className="todo__form d-flex align-items-center"
      >
        <input type="checkbox" className="todo__checkbox d-flex me-2" />
        <input
          type="text"
          value={inputText}
          onChange={handleInputTextChange}
          className="todo__input-text"
          autoFocus
        />
      </form>
      <div
        className={`todo__img-container ${toDoRectangleOpened ? "opened" : ""}`}
      >
        <Image
          src={theme === "light" ? DrawerIcon : DrawerDarkIcon}
          className="todo__drawer-icon"
        />
        <Image
          src={theme === "light" ? ToDoRectangleIcon : ToDoRectangleDarkIcon}
          className="todo__rectangle-icon"
          onClick={() => setToDoRectangleOpened((prev) => !prev)}
        />
      </div>
    </Container>
  );
}

export function AddToDo() {
  const dispatch = useDispatch();
  return (
    <Container
      className="todo-container__add-todo d-flex justify-content-center align-items-center px-0"
      onClick={() => {
        dispatch(createToDo());
      }}
    >
      <Image src={PlusIcon} className="add-todo__icon user-select-none" />
    </Container>
  );
}
