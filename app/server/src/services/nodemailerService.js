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

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: false,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS
//   }
// });

// const sender = {
//   name: 'Usuário Sender',
//   email: 'sender@teste.com'
// }

// const receiver = {
//   email: 'bar@example.com'
// }

// const mailContent = {
//   subject: 'Hello email!!',
//   text: 'Funcionou!!',
//   html: '<strong>Funcionou!!</strong>'
// }

// async function sendMail(transporter, sender, receiver, mailContent) {
//   const mail = await transporter.sendMail({
//     from: `"${sender.name}" ${sender.email}`,
//     to: `${receiver.email}`, // pode ser lista de recebimento
//     subject: `${mailContent.subject}`,
//     text: `${mailContent.text}`,
//     html: `${mailContent.html}`,
//   });

//   console.log('Email enviado: ', mail.messageId);
// }

// async function mail() {
//   try {
//     await sendMail(transporter, sender, receiver, mailContent);
//   } catch (error) {
//     console.log(error);
//   }
// }

// mail();