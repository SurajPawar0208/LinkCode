const express = require('express');
const router = express.Router();
const studentController = require('../Controller/studentController');

router.post('/add', studentController.addStudent);
router.get('/list', studentController.getStudents);
router.delete('/delete', studentController.deleteStudent);
router.put('/update', studentController.updateStudent);

module.exports = router;
