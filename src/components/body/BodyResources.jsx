import React, { useEffect, useState } from 'react';

export default function BodyResources({ resourcesType, fetchResources }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchResources();
            setItems(data);
        };
        fetchData();
    }, [fetchResources]);

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="justify-self-start self-start">
                <h1 className="font-bold Graphik Medium text-white ml-8 text-2xl">{resourcesType}</h1>
            </div>
            {/* <div className="w-full p-7">
                <ResourcesSection items={items} />
            </div> */}
        </div>
    );
}
