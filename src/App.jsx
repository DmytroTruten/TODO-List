import { Container, Image } from "react-bootstrap";
import Header from "./components/Header/Header";
import { ToDo, AddToDo } from "./components/ToDo/ToDo";
import ThemeToggle from "./assets/ThemeToggle.svg";

function App() {
  return (
    <Container fluid className="inner-root d-flex flex-column justify-content-center">
      <span className="inner-root__stripe inner-root__stripe_top"></span>
      <Image src={ThemeToggle} className="inner-root__theme-toggle"/>
      <Header />
      <Container className="todo-container d-flex flex-column px-0">
        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
        <AddToDo />
      </Container>
      <span className="inner-root__stripe inner-root__stripe_bottom"></span>
    </Container>
  );
}

export default App;
