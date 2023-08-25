import { Container, Image } from "react-bootstrap";
import NotePencilIcon from "../../assets/NotePencil.svg";
import "../../styles/Header/Header.css";

export default function Divider() {
  return (
    <Container className="divider-container d-flex justify-content-between align-items-center px-0 my-2 my-sm-4">
      <span className="header__line"></span>
      <Image
        src={NotePencilIcon}
        className="divider-container__note-pencil-icon user-select-none"
      />
      <span className="header__line"></span>
    </Container>
  );
}
