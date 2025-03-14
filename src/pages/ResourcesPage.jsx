import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import resourcesList from '../services/resourcesconfig';
import Navbar from '../components/navbar/Navbar';
import BodyResources from '../components/body/BodyResources';
import Footer from '../components/footer/Footer';

function ResourcesPage() {
  const { category } = useParams(); 
  const resource = resourcesList.find((res) => res.id === category);

  return (
    <>
      <Navbar />
      <BodyResources
        resourceCategory={resource?.category || "Recursos"}
        resourceFetchFunction={resource?.fetchFunction}
      />
      <Footer />
    </>
  );
}

export default ResourcesPage;