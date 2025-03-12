import React, { useState } from 'react';
import resourcesList from '../services/resourcesconfig';
import Navbar from '../components/navbar/Navbar';
import BodyResources from '../components/body/BodyResources';
import Footer from '../components/footer/Footer';

function ResourcesPage() {
    const [selectedResource, setSelectedResource] = useState({ title: "", fetchFunction: null });

    const selectResourceType = (title) => {
        const resource = resourcesList.find(resource => resource.title === title);
        if (resource) {
            setSelectedResource({ title: resource.title, fetchFunction: resource.fetchFunction });
        }
    };

    return (
        <>
            <Navbar />
            <BodyResources
                resourceTitle={selectedResource.title}
                resourceFetchFunction={selectedResource.fetchFunction}
                onSelectResourceType={selectResourceType}
            />
            <Footer />
        </>
    );
}

export default ResourcesPage;
