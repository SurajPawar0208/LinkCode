import './App.css'
import AddStudent from './Components/Student_Function'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes}from 'react-router-dom'

function App() {
  return <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addstudent' element={<AddStudent/>}/>
    </Routes>
  </BrowserRouter>
  </>
}
export default App
