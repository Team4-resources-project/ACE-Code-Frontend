import React, { useState, createContext } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ResourcesPage from './pages/ResourcesPage';  

export const BodyResourcesTypeContext = createContext();

function App() {
    const [selectedResource, setSelectedResource] = useState(null);

    const handleOptionSelect = (option) => {
        if (option === "Documentación") {
            console.log("hola");
            setSelectedResource(option);
        }
    };

    return(
        <div className="app">
            <BodyResourcesTypeContext.Provider value={selectedResource}>
                <ResourcesPage onOptionSelect={handleOptionSelect} />
            </BodyResourcesTypeContext.Provider>
        </div>
    );
}

export default App;
