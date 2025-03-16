import React, { useEffect, useState } from 'react';
import ResourcesSection from '../ResourcesSection';

const BodyResources = ({ resourceCategory, resourceFetchFunction, isDropdownOpen }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (resourceFetchFunction) {
        const data = await resourceFetchFunction();
        setItems(data);
      }
    };
    fetchData();
  }, [resourceFetchFunction]);

  return (
     <div className="container mt-30" style={{
          marginTop: isDropdownOpen ? "80px" : "0",
        }}>
      <div>
        <h1>{resourceCategory}</h1>
      </div>
      <div>
        <ResourcesSection items={items} />
      </div>
    </div>
  );
};

export default BodyResources;