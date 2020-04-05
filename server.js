 const express = require('express');

 const app = express();

 //Endpoints
 app.get('/', (req, res) => res.send('[server] API is running.'))

 const PORT = process.env.PORT || 6000;
 app.listen(PORT, () => console.log(`[server] Server started on port ${PORT}`));