import React, { useState } from 'react';
import resourcesList from '../services/resourcesconfig';
import Navbar from '../components/navbar/Navbar';
import BodyResources from '../components/body/BodyResources';
import Footer from '../components/footer/Footer';

function ResourcesPage() {
    const [selectedResource, setSelectedResource] = useState({ category: "", fetchFunction: null });

    const selectResourceType = (title) => {
        const resource = resourcesList.find(resource => resource.category === title);
        if (resource) {
            setSelectedResource({ title: resource.category, fetchFunction: resource.fetchFunction });
        }
    };

    return (
        <>
            <Navbar />
            <BodyResources
                resourceCategory={selectedResource.category}
                resourceFetchFunction={selectedResource.fetchFunction}
                onSelectResourceType={selectResourceType}
            />
            <Footer />
        </>
    );
}

export default ResourcesPage;
