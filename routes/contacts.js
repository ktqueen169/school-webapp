let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact List //
let Contacts = require('../models/contacts');

/*Get Route for the Contact list page - Read Operation */
router.get('/', (req, res, next) => {
    Contacts.find((err, ContactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else {
            //console.log(ContactsList);

            res.render('contacts', {title: 'Contact List', ContactsList: ContactsList})
        }
    });
});

module.exports = router;