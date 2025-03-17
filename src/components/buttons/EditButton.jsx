import EditModal from "../modals/EditModal";
import { useState } from "react";   
import Button from 'react-bootstrap/Button';

function EditButton() {
    const [show, setShow] = useState(false);
      
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    return (
        <>
        <Button className="edit-button"  variant="outline-light" size="sm" onClick={handleShow} data-testid="edit-button"><i class="bi bi-pen"></i></Button>
        <EditModal show={show} handleClose={handleClose} />
        </>
    );
}

export default EditButton;