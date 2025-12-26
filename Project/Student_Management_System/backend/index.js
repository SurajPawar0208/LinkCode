const connectDB = require('./database');
const express = require('express');
const studentRouter = require('./Routes/studentRoutes');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to Student Management API');
})

app.use(express.json());
app.use(cors())

app.use("/student", studentRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
