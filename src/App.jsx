import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/navbar';
import Body from './components/body/Body.jsx';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return(
      <div className="app">
        <Navbar />  
        <Body />
        <Footer />
      </div>
    )
}

export default App;
