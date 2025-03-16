import React from 'react';
import DocumentationResource from './resources/DocumentationResource';
import TutorialResource from './resources/TutorialResource';
import ExerciseResource from './resources/ExerciseResource';
import { createContext } from 'react';

export const ItemContext = createContext();


function ResourcesSection({ items }) {
  if (!items || items.length === 0) {
    return <p>No hay recursos disponibles.</p>;
  }

      return (
        <>
            {items.map((item) => (
                <ItemContext.Provider key={item.id} value={item}>
                    {item.category === 'documentation' && <DocumentationResource />}
                    {item.category === 'tutorials' && <TutorialResource />}
                    {item.category === 'exercises' && <ExerciseResource />}
                </ItemContext.Provider>
            ))}
        </>
    )
    }

export default ResourcesSection;