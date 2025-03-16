import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { putResource } from '../../services/resourcesapi';
import { ItemContext } from '../ResourcesSection';

function EditModal({ show, handleClose }) {
    const item = useContext(ItemContext);

    if (!item || !item.id) {
        console.error("Error: No se encontró el ID del recurso.");
        return <p>Error: No se encontró el recurso.</p>;
    }

    const [formData, setFormData] = useState({
        title: item.title || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedData = {
            title: formData.title || item.title,
            category: item.category, 
            fileUrl: item.fileUrl, 
        };

        console.log("ID del recurso:", item.id);
        console.log("Datos enviados al backend:", updatedData);

        try {
            const result = await putResource(item.id, updatedData); 
            console.log('Respuesta del backend:', result);

            alert('Recurso modificado exitosamente');
            handleClose();
        } catch (error) {
            console.error('Error al actualizar el recurso:', error.message);
            alert('Ocurrió un error al actualizar el recurso. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar recurso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    
                    <Form.Group controlId="editTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Título del recurso"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar cambios
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditModal;