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
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import avatar from "assets/img/ryan.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardContentBlack: {
    color: "#141414",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

function CvPage() {
  const [activeTab, setActiveTab] = React.useState("1");
  const classes = useStyles();
 
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
  
 <>
      <ExamplesNavbar />
      <ProfilePageHeader />
        <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves Kanye
                  I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Fortalezas</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                  <h5 className={classes.cardContentBlack}>Competitivo</h5>
                  <h5 className={classes.cardContentBlack}>Comprometido</h5>
                  <h5 className={classes.cardContentBlack}>Creativo</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                  <h5 className={classes.cardContentBlack}>Idiomas: Ingles</h5>
                  </GridItem>
                </GridContainer>
          
              </CardBody>
            </Card>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Certificaciones</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                  <h5 className={classes.cardContentBlack}>Titulo Certificacion: Curso SQL </h5>
                  <h5 className={classes.cardContentBlack}>Instituto Otorgante: Coder House</h5>
                  <h5 className={classes.cardContentBlack}>Año: 2020</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                  <h5 className={classes.cardContentBlack}>Titulo Certificacion: Python Avanzado </h5>
                  <h5 className={classes.cardContentBlack}>Instituto Otorgante: Educacion IT</h5>
                  <h5 className={classes.cardContentBlack}>Año: 2020</h5>
                  </GridItem>
                </GridContainer>
          
              </CardBody>
            </Card>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Formacion</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                  <h5 className={classes.cardContentBlack}>Titulo: Analista en Sistemas </h5>
                  <h5 className={classes.cardContentBlack}>Instituto Otorgante: UADE</h5>
                  <h5 className={classes.cardContentBlack}>Año: 2023</h5>
                  </GridItem>
                </GridContainer>
          
              </CardBody>
            </Card>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Aptitudes</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                  <h5 className={classes.cardContentBlack}>Soft Skills </h5>
                  <ul>
                    <li>
                      <h5 className={classes.cardContentBlack}>Control del tiempo</h5>
                    </li>
                    <li>
                      <h5 className={classes.cardContentBlack}>Gestion de conflictos</h5>
                    </li>
                    <li>
                      <h5 className={classes.cardContentBlack}>Pensamiento critico</h5>
                    </li>
                  </ul>
                  </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <h5 className={classes.cardContentBlack}>Hard Skills </h5>
                      <ul>
                        <li>
                          <h5 className={classes.cardContentBlack}>Data analysis</h5>
                        </li>
                        <li>
                          <h5 className={classes.cardContentBlack}>SQL Programming</h5>
                        </li>
                        <li>
                          <h5 className={classes.cardContentBlack}>Python Programming</h5>
                        </li>
                      </ul>
                    </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Experiencia</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <ul>
                      <li>
                        <h5 className={classes.cardContentBlack}>SQL Developer and QA Tester </h5>
                        <h5 className={classes.cardContentBlack}>Equifax</h5>
                        <h5 className={classes.cardContentBlack}>ago 2019 - actualidad </h5>
                          <p className={classes.cardContentBlack}>
                            <ul>
                              <li>Liderar un proyecto de migración de procesos de enriquecimiento de datos batch desde cloudera impala a google cloud platform
                              </li>
                              <li>Generar soluciones en SQL que cumplan con lo solicitado por los stakeholders
                              </li>
                              <li>Testear los productos finales usando JupyterLab
                              </li>
                            </ul>
                          </p>
                        </li>
                        <li>
                          <h5 className={classes.cardContentBlack}>PL/SQL Developer </h5>
                          <h5 className={classes.cardContentBlack}>Accenture</h5>
                          <h5 className={classes.cardContentBlack}>oct 2017 - ago 2019 </h5>
                          <p className={classes.cardContentBlack}>
                            <ul>
                              <li>Analisis funcional de procesos batch en cobol para implementar soluciones a bugs en SQL. 
                              </li>
                              <li>Recopilar documentación necesaria para cumplir con las auditorias internas.
                              </li>
                              <li>Testear en uat la implementacion de un ajuste a impuestos.
                              </li>
                            </ul>
                        </p>
                      </li>
                    </ul>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <DemoFooter />
    </>
  );
}

export default CvPage;
