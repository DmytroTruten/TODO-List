import { Container, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PlusIcon from "../../assets/Plus.svg";
import "../../styles/ToDo/ToDo.css";

export function ToDo() {
  return (
    <Container className="todo-container__todo d-flex align-items-center">
      <Form.Check className="todo__checkbox-container d-flex me-2" />
      <p className="mb-0">Organize directory of downloads</p>
    </Container>
  );
}

export function AddToDo() {
  return (
    <Container className="todo-container__add-todo d-flex justify-content-center align-items-center px-0">
      <Image src={PlusIcon} className="add-todo__icon user-select-none"/>
    </Container>
  );
}
