import { Container } from "react-bootstrap"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Cuentanos, ¿en que te podemos ayudar?
      </h1>
      <ContactForm />
      <br />
      <Footer/>
    </Container>
  )
}

export default Contact