//@desc Get all contacts
//@route GET /api/contacts
//access public

const Contacts = require('../models/contactModels');

const asyncHandler = require('express-async-handler');

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
});

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

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Delete a contact"});
});

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};