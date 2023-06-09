const ContactosModel = require("../models/Contactos");

class ContactosService {
  async getContacts() {
    try {
      const contacts = await ContactosModel.find();
      return contacts;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getContacts Service");
    }
  }

  async getContactById(id) {
    try {
      let contact = await ContactosModel.findOne({_id:id});
      return contact;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getContactsById Service");
    }
  }

  async getContactByCategory(cat) {
    try {
      let contact = await ContactosModel.find({ categoria: cat });
      return contact;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getContactsByCategory Service");
    }
  }

  async isContactRegistered(nombre) {
    try {
      let contact = await ContactosModel.exists({ nombre });
      if(contact){
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      throw new Error("Error in getContactsByCategory Service");
    }
  }

  async createContact(contact) {
    try {
      let savedContact = await ContactosModel.create(contact);
      return savedContact;
    
    } catch (err) {
      console.error(err);
      throw new Error("Error in createContact Service",err);
    }
  }
  async updateContact(id, fields, contact) {
    try {
      fields.descripcion ? contact.descripcion = fields.descripcion : false;
      fields.categoria ? contact.categoria = fields.categoria : false;
      fields.precio_unitario ? contact.precio_unitario = fields.precio_unitario : false;
      fields.url_img ? contact.url_img = fields.url_img : false;

      await ContactosModel.findOneAndUpdate({_id:id}, contact);
      return contact;
    } catch (err) {
      console.error(err);
      throw new Error("Error in updateContact Service");
    }
  }

  async deleteContact(id) {
    try {
      await ContactosModel.findOneAndDelete({_id:id});
    } catch (err) {
      console.error(err);
      throw new Error("Error in delete Service");
    }
  }
}

module.exports = new ContactosService();
