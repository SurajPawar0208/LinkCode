const express = require('express');
const mongoose  = require('mongoose');

const bookscheama = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },  
    BookAuthor: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    PublishDate: {
        type: Date,
        required: false
    },
    Description: {
        type: String,
        required: false
    }
},{timestamps: true});

const Book = mongoose.model('Book', bookscheama);

module.exports = Book;