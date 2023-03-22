require('dotenv').config();
const nodemailer = require('nodemailer');

const nodemailerService = (email, name, message, file) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  
  const mailer = {
    from: process.env.MAIL_USER,
    to: email,
    subject: `Email sent from ${name}`,
    text: message
  };
  
  if (file) {
    mailer.attachments = [];
    mailer.attachments.push({
      filename: file.originalname,
      content: file.buffer
    });
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailer)
      .then(response => {
        transporter.close();
        return resolve(response);
      })
      .catch(error => {
        transporter.close();
        return reject(error);
      });
  });
}

module.exports = nodemailerService;