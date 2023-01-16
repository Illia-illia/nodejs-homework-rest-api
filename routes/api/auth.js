const express = require('express');

const { auth: ctrl } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');

const { joiAuthSchema } = require('../../models');

const router = express.Router();

router.post('/register', validation(joiAuthSchema), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiAuthSchema), ctrlWrapper(ctrl.login));

module.exports = router;
