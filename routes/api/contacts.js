const express = require('express');

const { contacts: ctrl } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');

const { contactSchemaJoi, favoriteSchemaJoi } = require('../../models');

const router = express.Router();

router.post('/', validation(contactSchemaJoi), ctrlWrapper(ctrl.add));

router.put(
  '/:contactId',
  validation(contactSchemaJoi),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  validation(favoriteSchemaJoi),
  ctrlWrapper(ctrl.updateFavorite)
);

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteById));

module.exports = router;
