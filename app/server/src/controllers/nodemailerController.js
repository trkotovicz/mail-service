const nodemailerService = require("../services/nodemailerService");

module.exports = {
  sendMail: async (req, res) => {
    const { email, name, message, file } = req.body;
    await nodemailerService(email, name, message, file);
    res.status(204);
  },
}
