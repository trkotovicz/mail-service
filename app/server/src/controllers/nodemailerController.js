const nodemailerService = require("../services/nodemailerService");

module.exports = {
  sendMail: async (req, res) => {
    const { email, name, message } = req.body;
    const file = req.file;
    await nodemailerService(email, name, message, file);
    res.status(204).end();
  },
}
