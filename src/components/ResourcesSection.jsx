import React from 'react';
import DocumentationResource from '../resources/DocumentationResource';
import TutorialResource from '../resources/TutorialResource';
import ExerciseResource from '../resources/ExerciseResource';

function ResourcesSection({ items }) {
  if (!items || items.length === 0) {
    return <p>No hay recursos disponibles.</p>;
  }

  return (
    <>
      {items.map((item) => {
        if (item.category === 'documentation') {
          return (
            <div key={item.id}>
              <DocumentationResource title={item.title} href={item.fileUrl} />
            </div>
          );
        } else if (item.category === 'tutorial') {
          return (
            <div key={item.id}>
              <TutorialResource title={item.title} src={item.fileUrl} />
            </div>
          );
        } else if (item.category === 'exercise') {
          return (
            <div key={item.id}>
              <ExerciseResource title={item.title} src={item.fileUrl} />
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default ResourcesSection;