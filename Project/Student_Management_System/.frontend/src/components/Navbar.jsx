import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-secondary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-accent">
          Student Management
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent transition-colors">
            Dashboard
          </Link>
          <Link to="/students" className="hover:text-accent transition-colors">
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
