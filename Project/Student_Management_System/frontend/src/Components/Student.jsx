import React, { useEffect } from 'react';
import {
  ArrowLeft, Save, Trash2, Calendar,
  User, Mail, BookOpen, MapPin,
  Image as ImageIcon, RefreshCw
} from 'lucide-react';
import { useState } from 'react';
import { studentBaseURL } from '../AxiosInstance';

const Student = () => {

        const[studentform,setStudentform]=useState({
            name: "",
            email: "",
            age: "",
            course: "",
            address: ""
        })

        function handleChange(e){

          e.preventDefault();
            const {name,value}=e.target;
            setStudentform((prev) => ({
                    ...prev,
                    [name]:value
                }));

        }

        //Add Student

        async function handleSubmit(){
        try{
          const {data} =   await  studentBaseURL.post("/add", studentform);

          if (data?.success) {
            alert("Data Added Successfully")
          }
        }catch(err){
            alert( "Network Error",err);
        }
    }

    //Get StudentList

    const[studentlist,setStudentList]=useState([]);

    async function getStudentList() {
      try{
      const {data}= await studentBaseURL.get("/list");

      setStudentList(data?.students || []);
    }catch(err){
      alert("Network Error",err);
    }
    }

    useEffect(() => {
        getStudentList();
    },[]);

        //Delete Student

    async function handleDelete(id){
      try{
        const data= await studentBaseURL.delete("/delete",{
        data:{id:id}

      })
      if(data){
        alert("Success")
        getStudentList();
      }
    }catch(err){
        alert("Network Error",err);
      }
    }

        //Update Student

        const [selectedStudentId, setSelectedStudentId] = useState();

      async function handleUpdate(){
      try{
        const data= await studentBaseURL.put("/update",{
        id: selectedStudentId,
        ...studentform
      })
      if(data){
        alert("Success")
        getStudentList();
        setSelectedStudentId();
        setStudentform({
            name: "",
            email: "",
            age: "",
            course: "",
            address: ""
        });
      }
    }catch(err){
        alert("Network Error",err);
      }
    }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">

      {/* Sidebar: Quick Selection / Delete Action */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 p-6 flex flex-col">
       <a href="/"> <div className="flex items-center gap-2 mb-8 text-indigo-600 font-bold">
          <ArrowLeft size={20} className="cursor-pointer hover:-translate-x-1 transition-transform" />
          <span>Back to Dashboard</span>
        </div>
        </a>

        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Manage Students</h3>

        {/* Mock List for Selection (Update/Delete Context) */}
        <div className="space-y-3 overflow-y-auto h-[60vh] pr-2 custom-scrollbar">
          {studentlist.map((item) => (
            <div key={item._id} onClick={() => {
              setSelectedStudentId(item._id);
              setStudentform({
                name: item.name,
                email: item.email,
                age: item.age,
                course: item.course,
                address: item.address
              });
            }} className={`group p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer border-l-4 ${selectedStudentId === item._id ? 'border-l-indigo-500 bg-indigo-50' : 'border-l-transparent hover:border-l-indigo-500'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm"> {item.name}</h4>
                  <p className="text-xs text-slate-500">{item.email}</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(item._id); }} className="text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-200 text-slate-500 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all font-medium">
            <RefreshCw size={18} /> Clear Selection
          </button>
        </div>
      </aside>

      {/* Main Form Area */}
      <main className="flex-1 p-6 md:p-12 lg:px-24">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            STUDENT <span className="text-indigo-600">EDITOR</span>
          </h1>
          <p className="text-slate-500 mt-2 text-lg">Add a new student or update existing records.</p>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-4xl shadow-2xl shadow-slate-200/60 border border-slate-100">

          {/* Student Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <User size={16} className="text-indigo-500" /> Student Name
            </label>
            <input
            name='name'
            value={studentform.name}
            onChange={handleChange}
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Mail size={16} className="text-indigo-500" /> Email
            </label>
            <input
            name='email'
            value={studentform.email}
            onChange={handleChange}
              type="email"
              placeholder="e.g. john.doe@example.com"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Calendar size={16} className="text-indigo-500" /> Age
            </label>
            <input
            name='age'
            value={studentform.age}
            onChange={handleChange}
              type="number"
              placeholder="e.g. 20"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Course */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <BookOpen size={16} className="text-indigo-500" /> Course
            </label>
            <input
            name='course'
            value={studentform.course}
            onChange={handleChange}
              type="text"
              placeholder="e.g. Computer Science"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Address */}
          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <MapPin size={16} className="text-indigo-500" /> Address
            </label>
            <textarea
            name='address'
            value={studentform.address}
            onChange={handleChange}
              rows="3"
              placeholder="Enter student address..."
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300 resize-none"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={handleSubmit} className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Save Changes
            </button>
            <button onClick={handleUpdate} disabled={!selectedStudentId} className="px-8 py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2 border border-red-100 disabled:opacity-50 disabled:cursor-not-allowed">
              <Trash2 size={20} /> Update Student
            </button>
          </div>

        </form>

        {/* Footer Note */}
        <p className="mt-8 text-center text-slate-400 text-sm italic">
          Tip: Ensure the email is unique for each student.
        </p>
      </main>
    </div>
  );
};

export default Student;
