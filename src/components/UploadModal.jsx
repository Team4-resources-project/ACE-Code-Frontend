import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { postResource } from "../services/resourcesapi";

function UploadModal({ show, handleClose }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    fileUrl: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        file: files[0],
        fileUrl: "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      
      if (name === "fileUrl") {
        setFormData((prevData) => ({
          ...prevData,
          file: null,
        }));
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!formData.file && !formData.fileUrl) {
        alert("Debes ingresar una URL o subir un archivo.");
        return;
      }
  
      const resourceData = {
        title: formData.title,
        category: formData.category,
        fileUrl: formData.fileUrl || formData.file.name, 
      };
  
      try {
        const result = await postResource(resourceData); 
        console.log("Respuesta del backend:", result);
  
        if (typeof result === "string") {
          alert(result); 
        } else {
          alert("Recurso subido exitosamente");
        }
  
        handleClose(); 
      } catch (error) {
        console.error("Error al subir el recurso:", error.message);
        alert("Ocurrió un error al subir el recurso. Por favor, inténtalo de nuevo.");
      }
    }
  
    setValidated(true);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comparte tus recursos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newResourseTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="titulo"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="newResourceCategory">
            <Form.Label>Categoría</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Documentación"
                name="category"
                id="documentation"
                value="documentation"
                checked={formData.category === "documentation"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Tutorial"
                name="category"
                id="tutorial"
                value="tutorials"
                checked={formData.category === "tutorials"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Ejercicio"
                name="category"
                id="exercise"
                value="exercises"
                checked={formData.category === "exercises"}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Form.Group controlId="formFileUpload">
            <Form.Label>Compartir recurso de tu dispositivo</Form.Label>
            <Form.Control type="file" name="file" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicUrl">
            <Form.Label>Compartir URL del recurso</Form.Label>
            <Form.Control
              type="url"
              placeholder="Ingresar URL"
              name="fileUrl"
              value={formData.fileUrl}
              onChange={handleChange}
            />
            {formData.file && (
              <small className="text-muted">
                Nota: Se ha seleccionado un archivo. La URL será ignorada.
              </small>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Descartar
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Subir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UploadModal;
