import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
export const useStudents = (page = 1, limit = 10, search = '') => {
  const [data, setData] = useState({ students: [], pagination: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
    const fetchStudents = async () => {
        try {
        const response = await axios.get(`http://localhost:5001/api/student/list?page=${page}&limit=${limit}&search=${search}`);
        setData({ students: response.data.students, pagination: response.data.pagination });
        setLoading(false);
        } catch (err) {
        setError(err);
        setLoading(false);
        }
    };
    fetchStudents();
    }, [page, limit, search]);
    return { data, isLoading: loading, error };
};
export const useStudent = (id) => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    const fetchStudent = async () => {
        try {

        const response = await axios.get(`http://localhost:5001/api/student/${id}`);
        setStudent(response.data.student);
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
    const response = await axios.post('http://localhost:5001/api/student/add', studentData);
    return response.data;
    };
    return {

    mutateAsync: addStudent,
    };
};
export const useUpdateStudent = () => {
    const updateStudent = async ({ id, ...studentData }) => {
    const response = await axios.put('http://localhost:5001/api/student/update', { id, ...studentData });
    return response.data;
    };

    return {
    mutateAsync: updateStudent,
    };
};

export const useDeleteStudent = () => {
    const deleteStudent = async (id) => {
    const response = await axios.delete('http://localhost:5001/api/student/delete', { data: { id } });
    return response.data;
    };
    return {
    mutateAsync: deleteStudent,
    };
};

export const useRecentStudents = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    const fetchRecentStudent = async () => {
        try {
        const response = await axios.get(`http://localhost:5001/api/student/list?page=1&limit=1&sort=-createdAt`);
        setData(response.data.students[0] || null);
        setLoading(false);
        } catch (err) {
        setError(err);
        setLoading(false);
        }
    };
    fetchRecentStudent();
    }, []);
    return { data, isLoading: loading, error };
};


