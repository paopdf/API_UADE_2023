const {Router} = require('express');
const ContactosController = require('../controllers/Contactos.controller');
const jwtValidator = require('../middlewares/jwtValidator');
const checkFields = require('../middlewares/validateFields');
const { check } = require("express-validator");

const router = Router();

router.get('/',
[
    check('jwt').not().isEmpty(),
    checkFields
],
jwtValidator, ContactosController.getContacts); //GET Contactos
router.get('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,ContactosController.getContactById); //GET Contactos BY ID

router.post('/',[
    check('jwt').not().isEmpty(),
    check('contact.descripcion').not().isEmpty(),
    check('contact.categoria').not().isEmpty(),
    check('contact.precio_unitario').not().isEmpty(),
    check('contact.url_img').not().isEmpty(),
    checkFields
],jwtValidator,ContactosController.createContact); //POST Contactos

router.put('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,ContactosController.updateContact) //PUT Contactos

router.delete('/:id',[
    check('jwt').not().isEmpty(),
    checkFields
],jwtValidator,ContactosController.deleteContact) //DELETE Contactos 

module.exports = router;