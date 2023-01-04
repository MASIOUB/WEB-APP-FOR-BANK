const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

// Init App
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simple Route (Http Methods (Or Verbs))
app.get('/', (req, res) => {
    res.send('Welcome to your new application');
})

// Set Port, Listen For Requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });