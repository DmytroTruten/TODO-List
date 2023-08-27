import React, { useContext, useRef, useState } from "react";
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
  const [toDoRectangleOpened, setToDoRectangleOpened] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const todoState = useSelector(selectToDo);

  console.log("Todo state:", todoState);

  const handleInputChange = (e) => {
    dispatch(addToDo({ index, text: e.target.value }));
  };

  const handleInputFocus = () => {
    setIsDisabled(true);
  };

  const handleInputBlur = (e) => {
    inputRef.current.blur();
    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputBlur(e);
    }
  };

  const handleToDoDelete = () => {
    if (toDoRectangleOpened) {
      dispatch(deleteToDo({ index }));
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
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        className="todo__input-text"
        placeholder="Write your To-Do here..."
        autoFocus
      />
      <div
        className={`todo__img-container ${toDoRectangleOpened ? "opened" : ""}`}
      >
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
