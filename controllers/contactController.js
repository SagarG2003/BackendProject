const Contacts = require('../models/contactModels');

const asyncHandler = require('express-async-handler');


//@desc Get all contacts
//@route GET /api/contacts
//access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contacts
//access private
const createContact = asyncHandler(async (req, res) => {
    console.log("Request Body is:",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    const contact = await Contacts.create({name, email, phone});
    res.status(201).json(contact);
});

//@desc Update a contact
//@route POST /api/contacts/:id
//access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, req.body,{new: true}
    );
    res.status(200).json(updatedContact);
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contacts.remove();
    res.status(200).json(contact);
});

//@desc Get a contact
//@route GET /api/contacts/:id
//access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};