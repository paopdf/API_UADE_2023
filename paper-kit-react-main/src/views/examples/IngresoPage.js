/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import login from '../../api/login.api';
import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col,NavLink } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function IngresoPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    let response = await login(email,password);
      if (response.status === 200) { 
        sessionStorage.setItem("access-token",response.token); 
        let url = "/contactos-page";//especificar url de products
        setTimeout(() => {
          window.location.assign(url); 
        },1500
        )
      } 
    

  };

  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Bienvenido</h3>
                <form className="register-form" onSubmit={handleSubmit}>
                  <label>Email:</label>
                  <Input  placeholder="Email" type="email" value={email} onChange={handleEmailChange} required />
                  <label>Password:</label>
                  <Input  placeholder="Password" type="password" value={password} onChange={handlePasswordChange} required />
                  <Button block className="btn-round" color="danger" type="submit">Login</Button>
                </form>   
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    onClick={(e) => e.preventDefault()}
                  >
                    Olvide la contraseña
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Tim
          </h6>
        </div>
      </div>
    </>
  );
}

export default IngresoPage;
