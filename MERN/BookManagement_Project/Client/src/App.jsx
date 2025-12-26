import './App.css'
import Addbook from './Components/AddBook'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes}from 'react-router-dom'

function App() {
  return <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addbook' element={<Addbook/>}/>
    </Routes>
  </BrowserRouter>
  </>
}
export default App
