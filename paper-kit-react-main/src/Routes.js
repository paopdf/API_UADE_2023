import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ContactPage from "views/examples/ContactPage.js";
import IngresoPage from "views/examples/IngresoPage.js";
import ContactosPage from "views/examples/ContactosPage.js";
import CvPage  from "views/examples/CvPage.js";
//import TablaPage from "views/examples/TablaPage.js";
// others

export const RoutesMap = () =>{
    return(
        <Router>
            <Routes>
               <Route path="/profile-page" Component={ProfilePage}/>
                <Route path="/register-page" Component={RegisterPage}/>
                <Route path="/contact-page" Component={ContactPage}/>
                <Route path="/ingreso-page" Component={IngresoPage}/>
                <Route path="/contactos-page" Component={ContactosPage}/>
                <Route path="/cv-page" Component={CvPage}/>
            </Routes>
        </Router>
    )
}
    