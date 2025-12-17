import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import TvShows from './TvShows'
import List from './List'

const styles = `
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  overflow-x: hidden; 
}
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #000;
  color: #fff;
}
.nav {
  position: fixed;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #e50914;
}

.nav-left a {
  color: #fff;
  margin-left: 30px;
  text-decoration: none;
  font-size: 16px;
}

.nav-btn {
  background: #fff;
  color: #000;
  padding: 8px 18px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
}

.row h2 {
margin-top: 10px;
  font-size: 1.5rem;
}

.row-posters {
  display: flex;
  overflow-x: scroll;
  padding-bottom: 20px;
  gap: 30px;
}

.row-posters::-webkit-scrollbar {
  height: 6px;
}

.row-posters::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 3px;
}

.poster {
  min-width: 150px;
  height: 90px;
  background: linear-gradient(45deg, #333, #555);
  border-radius: 6px;
  flex-shrink: 0;
  transition: transform 0.3s;
}
.poster:hover {
  transform: scale(1.1);
}
`;

const Navbar = () => {
  return (
    <>
      <style>{styles}</style>
      <BrowserRouter>
      <header className="nav" style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
        <div className="nav-left" style={{display:'flex', alignItems:'center', gap:'30px'}}>
          <a href="/" className="logo" style={{textDecoration:'none', fontWeight:'bold', fontSize:'2rem', color:'#E50914', letterSpacing:'2px', marginRight:'30px', fontFamily:'Arial, Helvetica, sans-serif', lineHeight:'1', display:'flex', alignItems:'center', height:'40px'}} aria-label="Netflix Home">NETFLIX</a>
          <a href="/">Home</a>
          <a href="/show">TV Shows</a>
          <a href="/movies">Movies</a>
          <a href="/list">My List</a>
        </div>
        <div className="nav-right" style={{display:'flex', alignItems:'center'}}>
          <button className="nav-btn">Sign In</button>
        </div>
      </header>
     
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/show' element={<TvShows/>}/>
    <Route path='/list' element={<List/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default Navbar
