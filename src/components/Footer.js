/* eslint-disable space-before-function-paren */
/* eslint-disable react/react-in-jsx-scope */
import MailchimpForm from './MailchimpForm'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo4.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={5}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/dona-g"
              >
                <img src={navIcon1} alt="linked-in" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/"
              >
                <img src={navIcon2} alt="facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/dona_gino/"
              >
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p>CopyRight 2022. All Rights Reserved Dona Gino</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
