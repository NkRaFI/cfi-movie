import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AddProject from './pages/AddProject';
import AllProjects from './pages/AllProjects';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<AllProjects/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/addproject" element={<AddProject/>} />
          </Routes>
      <Footer/>
    </BrowserRouter>



        

        

        
    </div>
  );
}

export default App;
