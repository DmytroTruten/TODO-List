import React, { useContext, useEffect, useRef, useState } from "react";
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
import Checkbox from "../Checkbox/Checkbox";
import { useSelector } from "react-redux";
import { selectToDo } from "../../app/ToDoSlice";

export function ToDoItem({ index }) {
  const [toDoRectangleOpened, setToDoRectangleOpened] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const todoState = useSelector(selectToDo);

  console.log("Todo state:", todoState[index]);

  const handleChange = (e) => {
    dispatch(addToDo({ index, text: e.target.value }));
  };

  const handleFocus = () => {
    setIsDisabled(true);
  };

  const handleBlur = (e) => {
    inputRef.current.blur();
    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleBlur(e);
    }
  };

  return (
    <Container
      className={`todo-container__todo d-flex align-items-center justify-content-between pe-0 ${
        toDoRectangleOpened ? "opened" : ""
      }`}
    >
      <Checkbox isDisabled={isDisabled} index={index} />
      <input
        ref={inputRef}
        type="text"
        value={todoState[index].text}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="todo__input-text"
        placeholder="Write your To-Do here..."
        autoFocus
      />
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
