import React, { useEffect } from 'react';
import ResourcesSection from '../ResourcesSection';

const BodyResources = ({ resourceTitle, resourceFetchFunction, onSelectResourceType }) => {
    useEffect(() => {
        const dropdown_items = document.querySelectorAll('.dropdown-item');
        dropdown_items.forEach((dropdown_item) => {
            dropdown_item.addEventListener('click', () => onSelectResourceType(dropdown_item.textContent));
        });
    }, [onSelectResourceType]);

    const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await resourceFetchFunction();
      setItems(data);
    };
    fetchData();
  }, [resourceFetchFunction]);


    return (
        <>
            <div>
                <h1>{resourceTitle}</h1>
            </div>
            <div>
                <ResourcesSection items={items} />
            </div>
        </>
    );
};

export default BodyResources;
