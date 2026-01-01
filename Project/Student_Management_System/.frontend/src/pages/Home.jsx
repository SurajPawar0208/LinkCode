import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChartBar, FaPlus, FaEye, FaStar, FaQuoteLeft } from 'react-icons/fa6';

const Home = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-4xl text-accent mb-4" />,
      title: "Student Management",
      description: "Comprehensive student profile management with detailed information tracking."
    },
    {
      icon: <FaChartBar className="text-4xl text-accent mb-4" />,
      title: "Analytics Dashboard",
      description: "View statistics and insights about your student data with interactive charts."
    },
    {
      icon: <FaPlus className="text-4xl text-accent mb-4" />,
      title: "Easy Addition",
      description: "Quick and intuitive interface for adding new students to the system."
    },
    {
      icon: <FaEye className="text-4xl text-accent mb-4" />,
      title: "Detailed Views",
      description: "Access detailed student information and update records seamlessly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark via-secondary to-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <FaUserGraduate className="text-6xl text-accent mx-auto mb-4 animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Welcome to Student Management System
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Streamline your educational administration with our comprehensive student management solution.
            Manage student records, track performance, and enhance learning outcomes effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/students" className="btn btn-primary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300">
              View Students
            </Link>
            <Link to="/students/add" className="btn btn-secondary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300">
              Add Student
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card">
              <h3 className="text-3xl font-bold text-accent mb-2">100+</h3>
              <p className="text-gray-300">Students Managed</p>
            </div>
            <div className="card">
              <h3 className="text-3xl font-bold text-accent mb-2">24/7</h3>
              <p className="text-gray-300">System Availability</p>
            </div>
            <div className="card">
              <h3 className="text-3xl font-bold text-accent mb-2">Real-time</h3>
              <p className="text-gray-300">Data Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of educational institutions using our platform.
          </p>
          <Link to="/dashboard" className="btn btn-primary text-lg px-8 py-3">
            Go to Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
