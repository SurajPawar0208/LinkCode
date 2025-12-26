import axios from 'axios';

const studentBaseURL = axios.create({
  baseURL: 'http://localhost:5000/student', // Adjust the base URL to match your backend
});

export { studentBaseURL };
