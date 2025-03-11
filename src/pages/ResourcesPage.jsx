import React, { useContext, useEffect } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { BodyResourcesTypeContext } from '../App';
import BodyResources from '../components/body/BodyResources.jsx';
import resources from '../services/resourcesconfig.jsx';

const ResourcesPage = ({ onOptionSelect }) => {
    const selectedResource = useContext(BodyResourcesTypeContext);

    useEffect(() => {
        const dropdown_items = document.querySelectorAll('.dropdown-item');
        
        dropdown_items.forEach((dropdown_item) => {
            dropdown_item.addEventListener('click', () => onOptionSelect(dropdown_item.textContent));
        });

        return () => {
            dropdown_items.forEach((dropdown_item) => {
                dropdown_item.removeEventListener('click', () => onOptionSelect(dropdown_item.textContent));
            });
        };
    }, [onOptionSelect]);

    const resource = resources.find(resource => resource.title === selectedResource);

    return(
        <div>
            <Navbar />
            {selectedResource && resource && (
                <div id={resource.id}>
                    <BodyResources resourcesType={resource.title} fetchResources={resource.fetchFunction} />
                </div>
            )}
            <Footer />
        </div>
    );
}

export default ResourcesPage;
