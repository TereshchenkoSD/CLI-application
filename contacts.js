const fs = require("fs").promises;

const { v4 } = require("uuid");

const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const contacts = require(contactsPath);

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

async function listContacts() {
  return contacts;
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(
      (contact) => contact.id.toString() === contactId
    );
    if (!contact) {
      return null;
    }

    return contact;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const contactIdx = contacts.findIndex(
      (contact) => contact.id.toString() === contactId
    );
    if (!contactIdx) {
      throw new Error("ID is incorrect");
    }
    contacts.splice(contactIdx, 1);
    await updateContacts(contacts);
    return "Success remove";
  } catch (error) {
    console.log(error);
  }
}

const addContact = async (name, mail, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: v4(), name, mail, phone };
    contacts.push(newContact);
    await updateContacts(contacts);

    return newContact;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
