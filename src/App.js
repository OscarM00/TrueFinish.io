import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './home';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
import './contactUs.css';
import './aboutUs.css';
import './home.css';
import './App.css';

import TrueFinishLogo from './TrueFinishLogo.svg';


function App() {
  return (
   <>
   <BrowserRouter> 
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="Home">
        <img src={TrueFinishLogo}
            width="200"
              height="60"
              alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div class="greenHeader"></div>
    <Routes>
      <Route path='home' element={<Home/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/Contact' element={<ContactUs/>} />
    </Routes>
   </BrowserRouter>
   <footer class="footer">Copyright @2024 TrueFinish LLC. All Rights Reserved.</footer>
   </>
   
  );
}

export default App;
