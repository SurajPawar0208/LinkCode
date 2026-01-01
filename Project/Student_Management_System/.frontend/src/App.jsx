import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StudentsList from './pages/StudentsList';
import StudentDetail from './pages/StudentDetail';
import AddStudent from './pages/AddStudent';
import UpdateStudent from './pages/UpdateStudent';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentsList />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/students/:id/update" element={<UpdateStudent />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
