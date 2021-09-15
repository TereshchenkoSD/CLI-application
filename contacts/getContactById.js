const listContacts = require("./listContacts");

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

module.exports = getContactById;
