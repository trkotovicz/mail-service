require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const express = require('express');
const mailRouter = require('./routes/nodemailerRouter');

const app = express();

const PORT = process.env.APP_PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(mailRouter);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

module.exports = app;
