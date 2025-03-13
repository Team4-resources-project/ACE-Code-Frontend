import React from 'react';
import DocumentationResource from '../resources/DocumentationResource';
import TutorialResource from '../resources/TutorialResource';
import ExerciseResource from '../resources/ExerciseResource';

function ResourcesSection ({ items }) {
    return (
        <>
            {items.map((item) => {
                if (item.type === 'documentation') {
                    return (
                        <div key={item.id}>
                            <DocumentationResource
                                title={item.title}
                                href={item.href}
                            />
                        </div>
                    );
                } else if (item.type === 'tutorial') {
                    return (
                        <div key={item.id}>
                            <TutorialResource
                                title={item.title}
                                src={item.src}
                            />
                        </div>
                    );
                } else if (item.type === 'exercise') {
                    return (
                        <div key={item.id}>
                            <ExerciseResource
                                title={item.title}
                                src={item.src}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
};

export default ResourcesSection;
