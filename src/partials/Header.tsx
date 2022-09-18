import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Online Store
          </Link>
          <Nav className="justify-content-end">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products/">
              Products
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
