const path = require("path");
const contactsPath = path.join(__dirname, "../db/contacts.json");

const contacts = require(contactsPath);

async function listContacts() {
  return contacts;
}

module.exports = listContacts;
