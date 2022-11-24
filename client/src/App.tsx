import React from 'react';
import { Home, Dashboard, DicomUploader } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='upload' element={<DicomUploader/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;