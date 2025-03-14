/* const baseUrl = "http://localhost:8080/resources/upload/category";
const endpoint = "/documentation"; */

export async function getDocumentation() {
  try {
    const response = await fetch("http://localhost:8080/resources/upload/category/documentation");
    if (!response.ok) {
      throw new Error(`Error fetching documentation: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export async function getTutorials() {
  try {
    const response = await fetch("http://localhost:8080/resources/upload/category/tutorials");
    if (!response.ok) {
      throw new Error(`Error fetching tutorials: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export async function getExercises() {
  try {
    const response = await fetch("http://localhost:8080/resources/upload/category/exercises");
    if (!response.ok) {
      throw new Error(`Error fetching exercises: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}