import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ResourcesPage from './pages/ResourcesPage';  
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
    
    return(
        <div className="app">
<Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
    </Router>        
    </div>
    );
}

export default App;
