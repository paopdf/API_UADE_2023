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
import {
  Container,
  NavLink
} from "reactstrap";

import { UserProvider } from './UserContext';

import { Link } from "react-router-dom";
// core components
import GeneralNavbar from "components/Navbars/GeneralNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";



function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");
 

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
<UserProvider>
      <GeneralNavbar />
      </UserProvider>
      <ProfilePageHeader />
      <div className="home" lg = "6"   
      style={{
          height: "auto",
          backgroundImage:
            "url(" + require("assets/img/shutterstock_2254881335.jpg") + ")",
            backgroundSize: "cover"
        }}
      >
      
        <Container>
        <GridContainer>
      
        <GridItem xs={12} sm={12} md={6} align="bottom-center">
        </GridItem>
          <GridItem xs={12} sm={12} md={6} align="bottom-center">
            <Card plain>
               <CardBody plain>
                <h4 >Paola Pérez</h4>
                <h6 >Analista en Sistemas</h6>
                <p >
                  Desarrolladora SQL con 6 años de experiencia en el sector de la
                  tecnologia con conocimientos de COBOL, python y SQL. Actualmente
                  me encuentro en la busqueda de nuevos desafios que me permitan seguir
                  creciendo profesionalmente.
                </p>
                <div  className="col text-center">
                
                <NavLink to="/cv-page" tag={Link}>
                
                  <Button block md={6}  className="btn-round" color="danger">
                    Acerca de mi
                  </Button>
                  </NavLink>
                  <NavLink to="/contact-page" tag={Link}>
                
                  <Button block md={6} className="btn-round" color="danger">
                    Contactame
                  </Button>
                  </NavLink>
                  </div>
              </CardBody>
            </Card>
          </GridItem>
          </GridContainer>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
