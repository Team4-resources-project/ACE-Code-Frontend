import './App.css'
import React from 'react';
import Footer from './components/footer/Footer';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/navbar';
import Body from './components/body/Body.jsx'

function App() {
    return(
      <div>
        <Navbar />  
        <Body />
        <Footer />
      </div>
    )
}

export default App
