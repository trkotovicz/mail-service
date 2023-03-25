const { Router } = require('express');
const nodemailerController = require('../controllers/nodemailerController');

const mailRouter = Router();

mailRouter.post('/send-mail', nodemailerController.sendMail);

module.exports = mailRouter;