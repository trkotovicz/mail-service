require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer();

const PORT = process.env.APP_PORT || 3001;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

module.exports = app;
