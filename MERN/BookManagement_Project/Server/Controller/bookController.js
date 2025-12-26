const Book = require('../Model/book');

//Add Book

const handleBookController  = async (req, res) => { 
    try {
        const data=req.body;
        console.log(data);

        if(!data.Title || !data.BookAuthor || !data.Price){
            console.log("All fields are required");
            return res.status(400).json({message: "All fields are required",Success: false});
        }
        const bookdata = await Book.insertOne(data);
        if(bookdata){
            return res.status(200).json({message: "Book added successfully",Success: true});
        }
    } catch (err) {
       
        res.status(500).json({message: "Internal Server Error", Success: false});
    }
}

//Book List

const handleBookListController  = async (req, res) => { 
    try {
        const booklist = await Book.find({});

        if(booklist){
            return res.status(200).json({message: "Book added successfully",Success: true,
                BookList:booklist,
                TotalCount:booklist.length });
        }
    } catch (err) {
        res.status(500).json({message: "Internal Server Error", Success: false});
    }
}

//Delete Book

const handleBookDeleteController = async (req, res) => { 
    try {
        const data=req.body;
        const bookdeleted = await Book.deleteOne({_id:data.ID});

        if(bookdeleted.acknowledged){
            return res.status(200).json({message: "Book deleted successfully",Success: true });
        }
    } catch (err) {
        res.status(500).json({message: "Internal Server Error", Success: false});
    }
}

//Update Book

const handleBookUpdateController = async (req, res) => {
    try {
        const {ID, ...data} = req.body;
        const bookupdated = await Book.updateOne({_id: ID}, {$set: data});

        if(bookupdated){
            return res.status(200).json({message: "Book updated successfully",Success: true });
        }
    } catch (err) {
        res.status(500).json({message: "Internal Server Error", Success: false});
    }
}
module.exports = {handleBookController,handleBookListController,handleBookDeleteController,handleBookUpdateController};
