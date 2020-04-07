 const express = require('express');
 const connectDB = require('./config/connectDB');

 //Express server
 const app = express();

 //Connect DB
 connectDB();

 //Test endpoint
 app.get('/', (req, res) => res.send('[server] API is running.'))
 //Routes
 app.use('/api/category', require('./routes/api/category'));
 app.use('/api/product', require('./routes/api/product'));

 const PORT = process.env.PORT || 6000;
 app.listen(PORT, () => console.log(`[server] Server started on port ${PORT}`));