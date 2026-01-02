require('dotenv').config();
const connectDB = require('./database');
const express = require('express');
const studentRouter = require('./Routes/studentRoutes');
const cors = require('cors');
const errorHandler = require('./Middleware/errorHandler');

const port = process.env.PORT || 5001;

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

// Routes
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Student Management API',
        version: '1.0.0'
    });
});

app.use("/api/student", studentRouter);

// Error handler (must be last)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
