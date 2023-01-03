const express = require('express');
const createError = require('http-errors');
const { string, number } = require('joi');
const Joi = require('joi');
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../models/contacts');

const router = express.Router();

const contactScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.json({
      status: 'success',
      code: 200,
      data: { result: contacts },
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      throw createError(404, `Product with ID=${contactId} not found`);
    }
    res.json({
      status: 'success',
      code: 200,
      data: { result: contact },
    });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactScheme.validate(req.body);

    if (error) {
      error.status = 400;
      error.message = 'missing required field';
      throw error;
    }
    const result = await addContact(req.body);
    res.status(201).json({
      status: 'created',
      code: 201,
      data: { result },
    });
  } catch (err) {
    next(err);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
  } catch (error) {}
});

module.exports = router;
