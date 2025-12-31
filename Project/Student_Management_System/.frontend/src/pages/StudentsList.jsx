import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStudents, useDeleteStudent } from '../hooks/useStudents';
import Button from '../components/Button';
import toast, { Toaster } from 'react-hot-toast';

const StudentsList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useStudents(page, 10, search);
  const deleteStudentMutation = useDeleteStudent();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudentMutation.mutateAsync(id);
        toast.success('Student deleted successfully');
      } catch (error) {
        toast.error('Failed to delete student');
      }
    }
  };

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">Error loading students</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <Link to="/students/add" className="btn btn-primary">
          Add Student
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />
      </div>

      <div className="grid gap-4">
        {data?.students?.map((student) => (
          <div key={student._id} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{student.name}</h3>
                <p className="text-gray-400">{student.email}</p>
                <p>Age: {student.age} | Course: {student.course}</p>
                {student.address && <p>Address: {student.address}</p>}
              </div>
              <div className="flex space-x-2">
                <Link to={`/students/${student._id}`} className="btn btn-secondary">
                  View
                </Link>
                <Link to={`/students/${student._id}/edit`} className="btn btn-secondary">
                  Edit
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(student._id)}
                  disabled={deleteStudentMutation.isPending}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data?.pagination && (
        <div className="flex justify-center mt-6 space-x-2">
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            variant="secondary"
          >
            Previous
          </Button>
          <span className="px-4 py-2">
            Page {data.pagination.currentPage} of {data.pagination.totalPages}
          </span>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === data.pagination.totalPages}
            variant="secondary"
          >
            Next
          </Button>
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default StudentsList;
