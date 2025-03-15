import { useContext } from "react";
import { deleteResource } from "../../services/resourcesapi";   
import { ItemContext } from "../ResourcesSection";

function DeleteButton() {
    const item = useContext(ItemContext);
  const handleDelete = async (event) => {
    try {
      const result = await deleteResource(item.id);
      console.log("Respuesta del backend:", result);

      alert("Recurso eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar el recurso:", error.message);
      alert(
        "Ocurrió un error al eliminar el recurso. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <>
      <button onClick={handleDelete}>
        <i class="bi bi-trash"></i>
      </button>
    </>
  );
}

export default DeleteButton;
