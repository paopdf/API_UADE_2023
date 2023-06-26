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
// reactstrap components

import Typography from '@mui/material/Typography';
import { Button, Container, Row, Col, NavLink } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import register  from '../../api/register.api';
import  { useState } from 'react';


function RegisterPage() {

  const [email, setEmail] = useState('');
  const [lastname, setlastname] = useState('');
  const [password, setpassword] = useState('');
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');
   
  const openModal = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMessage('');
    setShowModal(false);
  };



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlelastnameChange = (e) => {
    setlastname(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await register(name,lastname,email,password)
     if (response.message === 'Created!') {
      openModal("Usuario Registrado con exito");
    }
    else {
      openModal("Error, usuario ya existe");
    }
    setEmail('');
    setlastname('');
    setpassword('');
    setName('');
}
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="title">
              <h3>Mis Datos</h3>
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
                        label="Nombre"
                        defaultValue=""
                        value={name} 
                        onChange={handleNameChange}
                        type="text"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Apellido"
                        defaultValue=""
                        value={lastname} 
                        onChange={handlelastnameChange}
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
                        label="Password"
                        defaultValue=""
                        value={password} 
                        onChange={handlepasswordChange}
                        type="password"
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
            <h3>{selectedMessage}</h3>
            <h3> </h3>
            <Button onClick={closeModal} className="btn-round" left= "1" color="danger">Close </Button>
          </div>
        </div>
      )}

      <style>
        {`
          .modal {
                        position: fixed;
                        top: 20;
                        left: 20;
                        width: 10;
                        height: 2;
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
                        width: 40%;
                        
                      }
        `}
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

export default RegisterPage;
