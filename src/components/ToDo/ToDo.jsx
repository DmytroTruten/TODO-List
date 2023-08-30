import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import { createToDo, addToDo, deleteToDo } from "../../app/ToDoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectToDo } from "../../app/ToDoSlice";
import PlusIcon from "../../assets/Plus.svg";
import ToDoRectangleIcon from "../../assets/ToDoRectangle.svg";
import ToDoRectangleDarkIcon from "../../assets/ToDoRectangleDark.svg";
import DrawerIcon from "../../assets/Drawer.svg";
import DrawerDarkIcon from "../../assets/DrawerDark.svg";
import Checkbox from "../Checkbox/Checkbox";
import "../../styles/ToDo/ToDo.css";

export function ToDoItem({ index }) {
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);
  const [isToDoItemHovered, setIsToDoItemHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);
  const toDoItemRef = useRef(null);
  const dispatch = useDispatch();
  const todoState = useSelector(selectToDo);

  console.log("Todo state:", todoState);

  useEffect(() => {
    setIsCheckboxDisabled(todoState[index].text === "");
  }, [todoState[index].text]);

  useEffect(() => {
    const handleInputBlur = () => {
      toDoItemRef.current.classList =
        "todo-container__todo d-flex align-items-center pe-0";
    };
    const handleInputFocus = () => {
      toDoItemRef.current.classList =
        "todo-container__todo todo-container__todo_focused d-flex align-items-center pe-0";
    };
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("blur", handleInputBlur);
      inputElement.addEventListener("focus", handleInputFocus);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("blur", handleInputBlur);
        inputElement.removeEventListener("focus", handleInputFocus);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    dispatch(addToDo({ index, text: e.target.value }));
  };

  const handleToDoDelete = () => {
    isToDoItemHovered ? dispatch(deleteToDo({ index })) : null;
  };

  return (
    <Container
      className="todo-container__todo d-flex align-items-center pe-0"
      ref={toDoItemRef}
      onMouseEnter={() => setIsToDoItemHovered((prev) => !prev)}
      onMouseLeave={() => setIsToDoItemHovered((prev) => !prev)}
    >
      <Checkbox isCheckboxDisabled={isCheckboxDisabled} index={index} />
      <input
        type="text"
        className="todo__input-text"
        placeholder="Write your To-Do here..."
        ref={inputRef}
        value={todoState[index].text}
        onChange={handleInputChange}
        disabled={todoState[index].done}
        autoFocus
      />
      <div className="todo__img-container">
        <label
          className="todo__drawer-label"
          htmlFor="todo__drawer"
          onClick={handleToDoDelete}
        >
          <Image
            src={theme === "light" ? DrawerIcon : DrawerDarkIcon}
            className="todo__drawer-icon"
            id="todo__drawer"
          />
        </label>
        <Image
          src={theme === "light" ? ToDoRectangleIcon : ToDoRectangleDarkIcon}
          className="todo__rectangle-icon"
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
