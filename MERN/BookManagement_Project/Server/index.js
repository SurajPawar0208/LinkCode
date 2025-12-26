const Database = require('./database');
const express = require('express');
const router = require('./Routes/bookRoutes');
const cors = require('cors');

const port = process.env.port || 3000;

const app = express();
Database();

   
    app.get('/', (req, res) => {
        res.send('Welcome to Book Management API');
    })

    app.use(express.json());
    app.use(cors())

    app.use("/book", router);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
