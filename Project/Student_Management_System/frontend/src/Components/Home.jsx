import React from 'react';
import { Users, Shield, Zap, Search, ArrowRight, GraduationCap, Layers, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">StudentFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next Generation Student Management System
        </div>

        {/* STYLISH TITLE */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
          STUDENT <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">MANAGEMENT</span>
          <br />
          <span className="text-slate-400">REIMAGINED.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
          The all-in-one workspace for modern educational institutions. Manage student records, track enrollment, and scale your operations with a beautiful interface designed for clarity and speed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/addstudent"> <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
            Get Started Free <ArrowRight size={20} />
          </button>
          </a>
          <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-slate-300 transition-all flex items-center justify-center gap-2">
            View Demo
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 text-left">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Student Records</h3>
            <p className="text-slate-500 leading-relaxed">Comprehensive student profiles with contact information, enrollment details, and academic history.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <Layers className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Course Management</h3>
            <p className="text-slate-500 leading-relaxed">Track course enrollments, manage student progress, and maintain detailed academic records.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <Globe className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Cloud Sync</h3>
            <p className="text-slate-500 leading-relaxed">Access student data from any device, anywhere in the world, in real-time with secure cloud storage.</p>
          </div>
        </div>
      </main>

      {/* Decorative Gradient Blob */}
      <div className="fixed top-0 right-0 -z-10 h-125 w-125 bg-indigo-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 -z-10 h-125 w-125 bg-purple-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default Home;
