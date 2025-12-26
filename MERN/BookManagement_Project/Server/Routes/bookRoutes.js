const express = require('express');
const {handleBookController,handleBookListController, handleBookDeleteController ,handleBookUpdateController} = require('../Controller/bookController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Router is working');
})

//Add Book
router.post('/add', handleBookController);

//booklist
router.get('/booklist',handleBookListController)
//Delete Book
router.delete('/bookdelete',handleBookDeleteController)
//Update Book 
router.put('/bookupdate',handleBookUpdateController)  

module.exports = router;