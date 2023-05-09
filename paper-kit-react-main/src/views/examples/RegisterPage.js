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

import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, NavLink } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
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
                      <TextField
                        required
                        id="outlined-required"
                        label="Nombre"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-disabled"
                        label="Apellido"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-disabled"
                        label="Email"
                        type="email"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-disabled"
                        label="Contraseña"
                        type="password"
                        defaultValue=""
                      />
                  
                  <div className="col text-center" >
                    <NavLink to="/profile-page" tag={Link}>
                    <Button
                      className="btn-round"
                      color="danger"
                    >
                      Registrar
                    </Button>
                    </NavLink> 
            
                    </div>
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
