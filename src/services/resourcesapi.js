export const API_URL = "http://localhost:8080/resources/upload";

export const ENDPOINTS = {
  documentation: `${API_URL}/category/documentation`,
  tutorials: `${API_URL}/category/tutorials`,
  exercises: `${API_URL}/category/exercises`,
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

export async function postResource(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Intenta obtener detalles del error
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: "Error desconocido" };
      }
      throw new Error(`Error ${response.status}: ${errorData.message || "Ocurrió un error"}`);
    }

    // Verifica si la respuesta es JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const result = await response.json();
      console.log("Respuesta del backend:", result);
      return result;
    } else {
      // Si no es JSON, lee la respuesta como texto
      const textResult = await response.text();
      console.log("Respuesta del backend (texto):", textResult);
      return textResult; // Devuelve el texto si no es JSON
    }
  } catch (error) {
    console.error("Error al subir el recurso:", error.message);
    throw error; // Lanza el error para manejarlo en el componente
  }
}