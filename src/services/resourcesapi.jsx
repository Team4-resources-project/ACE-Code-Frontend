export const API_URL = "http://localhost:8080/resources/upload/category";


export const fetchWithAuth = async (url, options = {}, requireAuth = true) => {
  let headers = { ...options.headers };

  // Agregar el token solo si se requiere autenticación
  if (requireAuth) {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No hay token disponible. Por favor, inicia sesión.");
    }
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }
  
  return fetch(`${API_URL}${url}`, { ...options, headers });
};

export const ENDPOINTS = {
  documentation: `${API_URL}/documentation`,
  tutorials: `${API_URL}/tutorials`,
  exercises: `${API_URL}/exercises`,
};

export async function getDocumentation() {
  try {
    const response = await fetchWithAuth(ENDPOINTS.documentation);
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
    const response = await fetchWithAuth(ENDPOINTS.tutorials);
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
    const response = await fetchWithAuth(ENDPOINTS.exercises);
    if (!response.ok) {
      throw new Error(`Error fetching exercises: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}