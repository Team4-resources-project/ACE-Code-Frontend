export const API_URL = "http://localhost:8080/resources/upload/category";

export const ENDPOINTS = {
  documentation: `${API_URL}/documentation`,
  tutorials: `${API_URL}/tutorials`,
  exercises: `${API_URL}/exercises`,
};

export async function getDocumentation() {
  try {
    const response = await fetch(ENDPOINTS.documentation);
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
    const response = await fetch(ENDPOINTS.tutorials);
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
    const response = await fetch(ENDPOINTS.exercises);
    if (!response.ok) {
      throw new Error(`Error fetching exercises: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}