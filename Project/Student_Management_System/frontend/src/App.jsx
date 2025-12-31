import './App.css'
import Student from './Components/Student'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes}from 'react-router-dom'

function App() {
  return <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
    </Routes>
  </BrowserRouter>
  </>
}
export default App
