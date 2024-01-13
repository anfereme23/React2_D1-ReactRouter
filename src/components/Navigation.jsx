import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar
    bg="danger "
    variant="dark"
  >
    <Container className="justify-content-start m-0">
      <Link to="/" className="text-white  text-decoration-none">
        🏠Home
      </Link>
      <Link to="/contacto" className="text-white  text-decoration-none p-2">
         📒Contacto
      </Link>
    </Container>
    <Navbar.Brand className="mr-5 pr-5">Happy Cake🎂 </Navbar.Brand>
  </Navbar>
  )
}

export default Navigation