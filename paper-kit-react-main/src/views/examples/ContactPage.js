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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
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
                      <TextField
                        required
                        id="outlined-required"
                        label="Nombre y Apellido"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-disabled"
                        label="Telefono"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-disabled"
                        label="Email"
                        type="mail"
                        defaultValue=""
                      />
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Mensaje"
                        multiline
                        rows={4}
                        defaultValue=""
                        />
   <div>
                 
                    <div className="col text-center" >
     
                    <Button
                      
                      className="btn-round"
                      color="danger"
                    >
                      Enviar
                    </Button>
                    </div>
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

export default ProfilePage;
