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
  Row,
  NavLink
} from "reactstrap";

// core components
import GeneralNavbar from "components/Navbars/GeneralNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";


import avatar from "assets/img/pao.jpg";

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
    marginTop: "100px",
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
    marginBottom: "2px",
    textDecoration: "none",
  },
  
  cardInfoWhite: {
    color: "white",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: 18,
    textAlign: "left"
  }
};

const useStyles = makeStyles(styles);

function CvPage() {
  const classes = useStyles();
 
  return (
  
 <>
      <GeneralNavbar />
      <ProfilePageHeader />
        <div className="card-plain">
        
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
                <h4 className={classes.cardTitle}>Paola Pérez</h4>
               
                <h6 className={classes.cardCategory}>SQL Developer </h6>
                
                <p className={classes.description}>
                  Poseo experiencia en el diseño, implementación y mantenimiento de bases de datos relacionales en SQL Server
                  de igual manera deasrrollo procedimientos almacenados y funciones en SQL para encapsular lógica de negocio compleja.
                  En el ultimo año he estado enfocandome en comprender los requisitos comerciales y traducirlos en consultas y análisis específicos
                  integrando SQL con Python 
                </p>
            </Card>
            <Card>
              <CardHeader color="primary" Header>
                <h4 >Fortalezas</h4>
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
                <h4>Formacion</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                <GridItem>
                   <h5 className={classes.cardContentBlack}>Titulo: Analista en Sistemas </h5>
                  <h5 className={classes.cardContentBlack}>Instituto Otorgante: UADE</h5>
                  <h5 className={classes.cardContentBlack}>Año: 2023</h5>
                  </GridItem>
                 
                </GridContainer>
          
              </CardBody>
            </Card>
    
            <Card profile>
              <CardBody profile>
                <h4 className={classes.cardInfoWhite}>Email: pao_pdpf@hotmail.com</h4>
                <h4 className={classes.cardInfoWhite}>Telefono: 1135985869</h4>
                <h4 className={classes.cardInfoWhite}>Palermo, CABA</h4>
              <Row>
              <NavLink
                href="https://twitter.com/paopdf"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/paola.perez.73594479"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/paodpf/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
              </NavLink>
              <NavLink
                data-placement="bottom"
                href="https://github.com/paopdf"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
              </NavLink>
              </Row>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
                <Card>
              <CardHeader color="primary">
                <h4>Certificaciones</h4>
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
                <h4 >Aptitudes</h4>
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
                <h4 >Experiencia</h4>
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
      <div>
      <DemoFooter />
      </div>
    </>
  );
}

export default CvPage;
