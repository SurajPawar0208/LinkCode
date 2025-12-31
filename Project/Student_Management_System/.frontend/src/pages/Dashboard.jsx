import { Link } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';

const Dashboard = () => {
  const { data, isLoading } = useStudents(1, 5); // Get first 5 students for dashboard

  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Total Students</h3>
          <p className="text-3xl font-bold text-accent">
            {data?.pagination?.totalCount || 0}
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Recent Students</h3>
          <p className="text-lg">View latest additions</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
          <Link to="/students/add" className="btn btn-primary">
            Add Student
          </Link>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Recent Students</h3>
        <div className="space-y-4">
          {data?.students?.slice(0, 5).map((student) => (
            <div key={student._id} className="flex justify-between items-center border-b border-gray-700 pb-2">
              <div>
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm text-gray-400">{student.email}</p>
              </div>
              <Link to={`/students/${student._id}`} className="btn btn-secondary">
                View
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link to="/students" className="btn btn-primary">
            View All Students
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
