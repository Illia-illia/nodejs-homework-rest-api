const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const contacts = await Contact.find({});
  console.log('what here', contacts);
  res.json({
    status: 'success',
    code: 200,
    data: { result: contacts },
  });
};

module.exports = getAll;
