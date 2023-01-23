const app = require('./app');
require('dotenv').config();
const connectDB = require('./config/db');

// Connexion To Database
connectDB();

// Set Port, Listen For Requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });