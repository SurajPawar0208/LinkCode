const Student = require('../Model/student');

// Add Student
const addStudent = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        if (!data.name || !data.email || !data.age || !data.course) {
            console.log("All required fields are needed");
            return res.status(400).json({ message: "All required fields are needed", Success: false });
        }

        const student = new Student(data);
        const savedStudent = await student.save();

        if (savedStudent) {
            return res.status(200).json({ message: "Student added successfully", Success: true });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", Success: false });
    }
}

// Get Students List
const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});

        return res.status(200).json({
            message: "Students retrieved successfully",
            Success: true,
            StudentList: students,
            TotalCount: students.length
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", Success: false });
    }
}

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.body; // Assuming ID is passed in body
        const deletedStudent = await Student.deleteOne({ _id: id });

        if (deletedStudent.deletedCount > 0) {
            return res.status(200).json({ message: "Student deleted successfully", Success: true });
        } else {
            return res.status(404).json({ message: "Student not found", Success: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", Success: false });
    }
}

// Update Student
const updateStudent = async (req, res) => {
    try {
        const { id, ...data } = req.body;
        const updatedStudent = await Student.updateOne({ _id: id }, { $set: data });

        if (updatedStudent.modifiedCount > 0) {
            return res.status(200).json({ message: "Student updated successfully", Success: true });
        } else {
            return res.status(404).json({ message: "Student not found or no changes made", Success: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", Success: false });
    }
}

module.exports = { addStudent, getStudents, deleteStudent, updateStudent };
