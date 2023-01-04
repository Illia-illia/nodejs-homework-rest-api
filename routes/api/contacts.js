const express = require('express');

const { contacts: ctrl } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');

const { contactScheme } = require('../../schemas');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validation(contactScheme), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteById));

router.put(
  '/:contactId',
  validation(contactScheme),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
