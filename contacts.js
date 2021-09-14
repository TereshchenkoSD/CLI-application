const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const contacts = require(contactsPath);

// const updateContacts = async (contacts) => {
//   await fs.writeFile(filePath, JSON.stringify(contacts));
// };

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

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = { listContacts, getContactById };
