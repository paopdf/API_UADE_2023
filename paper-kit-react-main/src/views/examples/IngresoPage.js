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
  
  const [showModal, setShowModal] = useState(false);
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
      else {
       setShowModal(true);
        setEmail('');
        setPassword('');
      }
    

  };
  const closeModal = () => {
    setShowModal(false);
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
                {showModal && (
                      <div className="modal">
                        <div className="modal-content">
                          <h3>Error</h3>
                          <p>El usuario o contraseña ingresados son erroneos</p>
                          <Button onClick={closeModal} className="btn-round" color="danger">Close</Button>
                        </div>
                      </div>
                    )}
                    <style>
                    {`
                      .modal {
                        position: absolute;
                        top: 20;
                        left: 20;
                        width: 40;
                        height: 400;
                        background-color: rgba(0, 0, 0, 0);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }

                      .modal-content {
                        background-color: white;
                        padding: 20px;
                        border-radius: 4px;
                        text-align: center;
                        color: black;
                      }
                    `
                    }
                    </style>                   
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
