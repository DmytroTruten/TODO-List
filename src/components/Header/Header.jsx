import { Container } from "react-bootstrap";
import Divider from "../Divider/Divider";
import "../../styles/Header/Header.css";

export default function Header() {
  return (
    <Container className="header-container px-0">
      <Container className="header-container__header d-flex justify-content-center align-items-center gap-3 gap-sm-4 px-0">
        <span className="header__line"></span>
        <h1 className="header__h1 mb-0">TO-DO NOW</h1>
        <span className="header__line"></span>
      </Container>
      <Divider />
    </Container>
  );
}
