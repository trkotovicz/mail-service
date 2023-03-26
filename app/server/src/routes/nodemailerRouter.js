const { Router } = require('express');
const multer = require('multer');
const nodemailerController = require('../controllers/nodemailerController');

const mailRouter = Router();

const upload = multer();

mailRouter.post('/send-mail', upload.single('file'), nodemailerController.sendMail);

module.exports = mailRouter;