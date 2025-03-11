import resources from "../services/resourcesconfig.jsx";
import BodyResources from "../components/body/BodyResources.jsx";
import { createContext } from "react";

const dropdown_items = document.querySelectorAll('.dropdown-item');
let option; 

function identifyOption() {
  dropdown_items.forEach((dropdown_item) => {
    dropdown_item.addEventListener('click', () => displayBodyResources(option = dropdown_item.textContent));
  });
}

export const BodyResourcesTypeContext = createContext();

export function displayBodyResources(option) {
  resources.map((resource) => {
    if (resource.title === option) {
      return (
        <BodyResourcesTypeContext.Provider value={resource.id} key={resource.id}>
          <div id={resource.id}>
            <BodyResources resourcesType={resource.title} fetchResources={resource.fetchFunction} />
          </div>
        </BodyResourcesTypeContext.Provider>
      );
    }
    return null;
  });
}

identifyOption();
