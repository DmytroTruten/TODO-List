import { Container, Image } from "react-bootstrap";
import PlusIcon from "../../assets/Plus.svg";
import ToDoRectangleIcon from "../../assets/ToDoRectangle.svg";
import ToDoRectangleDarkIcon from "../../assets/ToDoRectangleDark.svg";
import DrawerIcon from "../../assets/Drawer.svg";
import DrawerDarkIcon from "../../assets/DrawerDark.svg";
import "../../styles/ToDo/ToDo.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function ToDo() {
  const { theme } = useContext(ThemeContext);
  const [toDoRectangleOpened, setToDoRectangleOpened] = useState(false);

  return (
    <Container
      className={`todo-container__todo d-flex align-items-center justify-content-between pe-0 ${
        toDoRectangleOpened ? "opened" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        <input type="checkbox" className="todo__checkbox d-flex me-2" />
        <p className="mb-0">Organize directory of downloads</p>
      </div>
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
  return (
    <Container className="todo-container__add-todo d-flex justify-content-center align-items-center px-0">
      <Image src={PlusIcon} className="add-todo__icon user-select-none" />
    </Container>
  );
}
