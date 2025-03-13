const url = "http://localhost:8080/resources/upload/category";

async function getResourcesByCategory(category) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const allResources = await response.json();
    const filteredResources = allResources.filter((resource) => resource.category === category);
    return filteredResources;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getDocumentation() {
  return getResourcesByCategory("documentation");
}

export async function getTutorials() {
  return getResourcesByCategory("tutorials");
}

export async function getExercises() {
  return getResourcesByCategory("exercises");
}