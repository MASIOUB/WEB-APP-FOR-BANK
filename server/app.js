const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Init App
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simple Route (Http Methods (Or Verbs))
app.get('/', (req, res) => {
    res.status(200).send('Welcome to your new application');
})

// client routes
app.use('/clients/', require('./client/routes/clientRoutes'));

// admin routes
app.use('/admins/', require('./admin/routes/adminRoutes'));

// account routes
app.use('/accounts/', require('./account/routes/accountRoutes'));

// transaction routes
app.use('/transactions/', require('./transaction/routes/transactionRoutes'));

module.exports = app;