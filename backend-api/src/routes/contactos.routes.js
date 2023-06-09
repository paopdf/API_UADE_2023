const {Router} = require("express");
const {check} = require("express-validator");
const contactosController = require("../controllers/contactos.controller");
const checkFields = require("../middlewares/validateFields");

const router = Router();

router.get("/", contactosController.getContactos);

router.post(
    "/",
    [
        check("nombre").not().isEmpty(),
        check("telefono").not().isEmpty(),
        check("email").not().isEmpty(),
        check("mensaje").not().isEmpty(),
        checkFields,
    ],
    contactosController.createContacto
);

