import { Container } from "react-bootstrap"
import error from "../assets/img/404.png"
import Footer from "../components/Footer"

const NotFound = () => {
  return (
    <Container className="text-center">
        <img src={error} alt="error image" />
        <br />
      <Footer/>
    </Container>
  )
}

export default NotFound