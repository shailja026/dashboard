import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import styles from "../styles/navbar.module.css"
function ColorSchemesExample() {
  return (
    <>
     
    
      <Navbar bg="light" data-bs-theme="light">
        <Container>
       
          <Nav className="me-auto">
          <span>APP LOGO</span>
          <div className={styles.pages}>
      <Link to="/">DASHBOARD</Link>
      <Link to="/adds" >CREATE ADS</Link>
      </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;