const createError = require('http-errors');

const { updateContact } = require('../../models/contacts');

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) {
    throw createError(404, `Product with ID=${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
};

module.exports = updateById;
