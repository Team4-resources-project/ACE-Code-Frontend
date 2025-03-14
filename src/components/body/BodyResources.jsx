import React, { useEffect, useState } from 'react';
import ResourcesSection from '../ResourcesSection';

const BodyResources = ({ resourceCategory, resourceFetchFunction }) => {
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
    <>
      <div>
        <h1>{resourceCategory}</h1>
      </div>
      <div>
        <ResourcesSection items={items} />
      </div>
    </>
  );
};

export default BodyResources;