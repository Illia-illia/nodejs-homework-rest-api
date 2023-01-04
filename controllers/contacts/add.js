const { addContact } = require('../../models/contacts');

const add = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json({
    status: 'created',
    code: 201,
    data: { result },
  });
};

module.exports = add;
