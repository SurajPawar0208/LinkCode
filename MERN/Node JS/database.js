const mongoose = require('mongoose');

async function connectDB (){
        await mongoose.connect("mongodb+srv://sp97637261_db_user:Njo6iA2mT80jUHTY@nodejs.p9h5yyd.mongodb.net/?appName=NodeJS")
            .then(() => {
                console.log('MongoDB connected successfully');
            })
            .catch((err) => {
                console.error('MongoDB connection error:', err);
            })
    }
   
module.exports = connectDB;

// sp97637261_db_user

// Njo6iA2mT80jUHTY