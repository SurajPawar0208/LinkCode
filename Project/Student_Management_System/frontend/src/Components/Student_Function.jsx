
import React, { useEffect } from 'react';
import {
  ArrowLeft, Save, Trash2, Calendar,
  User, Mail, Hash, BookOpen,
  MapPin, RefreshCw, Edit
} from 'lucide-react';
import { useState } from 'react';
import { studentBaseURL } from '../AxiosInstance';

const AddStudent = () => {

        const[studentform,setStudentform]=useState({
            name: "",
            email: "",
            age: "",
            course: "",
            address: ""
        })

        function change(e){

          e.preventDefault();
            const {name,value}=e.target;
            setStudentform((prev)=>(
                {
                    ...prev,
                    [name]:value
                }
            ))

        }

        //Add Student

        async function submit(){
        try{
          const {data} =   await  studentBaseURL.post("/add", studentform);

          if (data?.Success) {
            alert("Student Added Successfully")
            getStudentList();
            setStudentform({
                name: "",
                email: "",
                age: "",
                course: "",
                address: ""
            });
          }
        }catch(err){
            alert( "Network Error",err);
        }
    }

    //Get Student List

    const[studentlist,setStudentList]=useState([]);

    async function getStudentList() {
      try{
      const {data}= await studentBaseURL.get("/list");

      setStudentList(data?.StudentList || []);
    }catch(err){
      alert("Network Error",err);
    }
    }

    useEffect(() => {
        getStudentList();
    },[]);

        //Delete Student

    async function remove(id){
      try{
        const data= await studentBaseURL.delete("/delete",{
        data:{id:id}

      })
      if(data){
        alert("Student Deleted Successfully")
        getStudentList();
      }
    }catch(err){
        alert("Network Error",err);
      }
    }

        //Update Student

        const [selectedStudentId, setSelectedStudentId] = useState();

      async function update(){
      try{
        const data= await studentBaseURL.put("/update",{
        id: selectedStudentId,
        ...studentform
      })
      if(data){
        alert("Student Updated Successfully")
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
       
        {/* Student List */}
        <div className="space-y-3 overflow-y-auto h-[60vh] pr-2 custom-scrollbar">
          {studentlist.map((student) => (
            <div key={student._id} onClick={() => {
              setSelectedStudentId(student._id);
              setStudentform({
                name: student.name,
                email: student.email,
                age: student.age,
                course: student.course,
                address: student.address
              });
            }} className={`group p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer border-l-4 ${selectedStudentId === student._id ? 'border-l-indigo-500 bg-indigo-50' : 'border-l-transparent hover:border-l-indigo-500'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm"> {student.name}</h4>
                  <p className="text-xs text-slate-500">{student.email}</p>
                  <p className="text-xs text-slate-400">{student.course}</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); remove(student._id); }} className="text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <button onClick={() => {
            setSelectedStudentId();
            setStudentform({
                name: "",
                email: "",
                age: "",
                course: "",
                address: ""
            });
          }} className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-200 text-slate-500 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all font-medium">
            <RefreshCw size={18} /> Clear Selection
          </button>
        </div>
      </aside>

      {/* Main Form Area */}
      <main className="flex-1 p-6 md:p-12 lg:px-24">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            STUDENT <span className="text-indigo-600">MANAGER</span>
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
            onChange={change}
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Mail size={16} className="text-indigo-500" /> Email Address
            </label>
            <input
            name='email'
            value={studentform.email}
            onChange={change}
              type="email"
              placeholder="e.g. john.doe@example.com"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Hash size={16} className="text-indigo-500" /> Age
            </label>
            <input
            name='age'
            value={studentform.age}
            onChange={change}
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
            onChange={change}
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
            onChange={change}
              rows="3"
              placeholder="Enter student address..."
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300 resize-none"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={submit} className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all flex items-center justify-center gap-2">
              <Save size={20} /> Add Student
            </button>
            <button onClick={update} disabled={!selectedStudentId} className="px-8 py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2 border border-red-100 disabled:opacity-50 disabled:cursor-not-allowed">
              <Edit size={20} /> Update Student
            </button>
          </div>

        </form>

        {/* Footer Note */}
        <p className="mt-8 text-center text-slate-400 text-sm italic">
          Tip: Ensure the email address is unique for each student.
        </p>
      </main>
    </div>
  );
};

export default AddStudent;
