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
import React from "react";

import postContact  from '../api/contactar.api';
import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import GeneralNavbar from "components/Navbars/GeneralNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


function ContactPage() {

  const [email, setEmail] = useState('');
  const [telefono, settelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handletelefonoChange = (e) => {
    settelefono(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContact(name,telefono,email,mensaje)
      .then(() => {
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error);
      });
      
      setEmail('');
      settelefono('');  
      setMensaje('');
      setName('');
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <GeneralNavbar />
      <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="title">
              <h3>Rellenar Formulario</h3>
            </div>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
              >
              <Row>
                <Col className="ml-auto mr-auto" lg="6">
                  <div className="social-line text-center">     
                    <form >
                      <TextField
                        required
                        id="outlined-required"
                        label="Nombre y Apellido"
                        defaultValue=""
                        value={name} 
                        onChange={handleNameChange}
                        type="text"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Telefono"
                        defaultValue=""
                        value={telefono} 
                        onChange={handletelefonoChange}
                        type="text" 
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                        value={email} 
                        onChange={handleEmailChange}
                        type="mail"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Mensaje"
                        defaultValue=""
                        value={mensaje} 
                        onChange={handleMensajeChange}
                        type="text"
                      />
                      <div className="col text-center" >
                        <Button onClick={handleSubmit} className="btn-round" color="danger">
                          Enviar
                        </Button>
                      </div>
                    </form>   
                    {showModal && (
                      <div className="modal">
                        <div className="modal-content">
                          <h3>Formulario Enviado</h3>
                          <p>Gracias por contactarte!</p>
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
                      }
                    `
                    }
                    </style>                   
                  </div>
                </Col>
              </Row> 
            </Box>
          </Container>
        </div>
      <DemoFooter />
    </>
  );
}

export default ContactPage;
