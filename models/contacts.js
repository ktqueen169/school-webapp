let mongoose = require('mongoose');

// create a model class for business contacts
let ContactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contact_list"
});

module.exports = mongoose.model('Contacts', ContactsModel);