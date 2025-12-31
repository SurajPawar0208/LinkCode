const Student = require('../Model/student');

// Add Student
const addStudent = async (req, res) => {
    try {
        const data = req.body;

        if (!data.name || !data.email || !data.age || !data.course) {
            return res.status(400).json({ 
                message: "All required fields are needed", 
                success: false 
            });
        }

        // Check if email already exists
        const existingStudent = await Student.findOne({ email: data.email });
        if (existingStudent) {
            return res.status(400).json({ 
                message: "Student with this email already exists", 
                success: false 
            });
        }

        const student = new Student(data);
        const savedStudent = await student.save();

        return res.status(201).json({ 
            message: "Student added successfully", 
            success: true,
            student: savedStudent
        });
    } catch (err) {
        console.error('Add student error:', err);
        if (err.code === 11000) {
            return res.status(400).json({ 
                message: "Student with this email already exists", 
                success: false 
            });
        }
        res.status(500).json({ 
            message: "Internal Server Error", 
            success: false,
            error: err.message 
        });
    }
}

// Get Students List
const getStudents = async (req, res) => {
    try {
        const { search, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = req.query;
        
        // Build query
        let query = {};
        if (search) {
            query = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { course: { $regex: search, $options: 'i' } }
                ]
            };
        }

        // Calculate pagination
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        const students = await Student.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Student.countDocuments(query);

        return res.status(200).json({
            message: "Students retrieved successfully",
            success: true,
            students: students,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / parseInt(limit)),
                totalCount: total,
                limit: parseInt(limit)
            }
        });
    } catch (err) {
        console.error('Get students error:', err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            success: false,
            error: err.message 
        });
    }
}

// Get Student By ID
const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Student retrieved successfully",
            success: true,
            student
        });
    } catch (err) {
        console.error('Get student by ID error:', err);
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: err.message
        });
    }
}

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.body;
        
        if (!id) {
            return res.status(400).json({ 
                message: "Student ID is required", 
                success: false 
            });
        }

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (deletedStudent) {
            return res.status(200).json({ 
                message: "Student deleted successfully", 
                success: true 
            });
        } else {
            return res.status(404).json({ 
                message: "Student not found", 
                success: false 
            });
        }
    } catch (err) {
        console.error('Delete student error:', err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            success: false,
            error: err.message 
        });
    }
}

// Update Student
const updateStudent = async (req, res) => {
    try {
        const { id, ...data } = req.body;
        
        if (!id) {
            return res.status(400).json({ 
                message: "Student ID is required", 
                success: false 
            });
        }

        // Check if email is being updated and if it already exists
        if (data.email) {
            const existingStudent = await Student.findOne({ 
                email: data.email, 
                _id: { $ne: id } 
            });
            if (existingStudent) {
                return res.status(400).json({ 
                    message: "Student with this email already exists", 
                    success: false 
                });
            }
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            id, 
            { $set: data },
            { new: true, runValidators: true }
        );

        if (updatedStudent) {
            return res.status(200).json({ 
                message: "Student updated successfully", 
                success: true,
                student: updatedStudent
            });
        } else {
            return res.status(404).json({ 
                message: "Student not found", 
                success: false 
            });
        }
    } catch (err) {
        console.error('Update student error:', err);
        if (err.code === 11000) {
            return res.status(400).json({ 
                message: "Student with this email already exists", 
                success: false 
            });
        }
        res.status(500).json({ 
            message: "Internal Server Error", 
            success: false,
            error: err.message 
        });
    }
}

module.exports = { addStudent, getStudents, getStudentById, deleteStudent, updateStudent };
