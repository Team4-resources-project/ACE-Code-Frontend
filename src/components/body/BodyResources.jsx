import React, { useEffect } from 'react';
import ResourcesSection from '../ResourcesSection';

const BodyResources = ({ resourceTitle, onSelectResourceType }) => {
    useEffect(() => {
        const dropdown_items = document.querySelectorAll('.dropdown-item');
        dropdown_items.forEach((dropdown_item) => {
            dropdown_item.addEventListener('click', () => onSelectResourceType(dropdown_item.textContent));
        });
    }, [onSelectResourceType]);

    return (
        <div>
            <h1>{resourceTitle}</h1>
        </div>
    );
};

export default BodyResources;
