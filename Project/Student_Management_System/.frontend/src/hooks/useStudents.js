import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
    const fetchStudents = async () => {
        try {
        const response = await axios.get('http://localhost:5000/api/student/list');
        setStudents(response.data.students);
        setLoading(false);
        } catch (err) {
        setError(err);

        setLoading(false);
        }
    };
    fetchStudents();
    }, []);
    return { data: { students }, isLoading: loading, error };
};
export const useStudent = (id) => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    const fetchStudent = async () => {
        try {

        const response = await axios.get(`http://localhost:5000/api/student/${id}`);
        setStudent(response.data);
        setLoading(false);
        } catch (err) {
        setError(err);
        setLoading(false);
        }
    };
    fetchStudent();
    }, [id]);
    return { data: student, isLoading: loading, error };
};
export const useAddStudent = () => {
    const addStudent = async (studentData) => {
    const response = await axios.post('http://localhost:5000/api/student/add', studentData);
    return response.data;
    };
    return {

    mutateAsync: addStudent,
    };
};
export const useUpdateStudent = () => {
    const updateStudent = async ({ id, ...studentData }) => {
    const response = await axios.put('http://localhost:5000/api/student/update', { id, ...studentData });
    return response.data;
    };

    return {
    mutateAsync: updateStudent,
    };
};

export const useDeleteStudent = () => {
    const deleteStudent = async (id) => {
    const response = await axios.delete('http://localhost:5000/api/student/delete', { data: { id } });
    return response.data;
    };
    return {
    mutateAsync: deleteStudent,
    };
};
