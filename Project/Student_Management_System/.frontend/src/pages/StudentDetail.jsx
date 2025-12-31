import { useParams, Link } from 'react-router-dom';
import { useStudent } from '../hooks/useStudents';
import Button from '../components/Button';

const StudentDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useStudent(id);

  if (isLoading) return <div className="text-center">Loading...</div>;

  const student = data?.student;

  if (!student) return <div className="text-center">Student not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Details</h1>
        <Link to="/students" className="btn btn-secondary">
          Back to Students
        </Link>
      </div>

      <div className="card max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <p className="text-lg">{student.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <p className="text-lg">{student.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Age</label>
            <p className="text-lg">{student.age}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Course</label>
            <p className="text-lg">{student.course}</p>
          </div>
          {student.address && (
            <div>
              <label className="block text-sm font-medium">Address</label>
              <p className="text-lg">{student.address}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">Enrollment Date</label>
            <p className="text-lg">{new Date(student.enrollmentDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <Link to={`/students/${id}/edit`} className="btn btn-primary">
            Edit Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
