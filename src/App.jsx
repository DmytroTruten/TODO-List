import { Container, Image } from "react-bootstrap";
import Header from "./components/Header/Header";
import { ToDo, AddToDo } from "./components/ToDo/ToDo";
import ThemeToggle from "./assets/ThemeToggle.svg";
import { ThemeArea, ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect } from "react";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("to-do-now-theme", JSON.stringify(theme));
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
