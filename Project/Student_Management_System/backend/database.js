const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://sp97637261_db_user:Njo6iA2mT80jUHTY@nodejs.p9h5yyd.mongodb.net/?appName=NodeJS");
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

module.exports = connectDB;
