require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

module.exports = app;
