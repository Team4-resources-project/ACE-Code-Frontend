import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import DocumentationPage from './pages/DocumentationPage';  
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
    
    return(
        <div className="app">
<Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
    </Router>        
    </div>
    );
}

export default App;
