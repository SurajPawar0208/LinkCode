const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Student Management System</h3>
            <p className="text-gray-300">
              A comprehensive solution for managing student information, grades, and academic records.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/students" className="text-gray-300 hover:text-accent">View Students</a></li>
              <li><a href="/students/add" className="text-gray-300 hover:text-accent">Add Student</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-accent">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: support@studentms.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Student Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
