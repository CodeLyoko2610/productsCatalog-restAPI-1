 const express = require('express');
 const connectDB = require('./config/connectDB');

 //Express server
 const app = express();

 //Connect DB
 connectDB();

 //Endpoints
 app.get('/', (req, res) => res.send('[server] API is running.'))

 const PORT = process.env.PORT || 6000;
 app.listen(PORT, () => console.log(`[server] Server started on port ${PORT}`));