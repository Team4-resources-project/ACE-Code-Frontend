import EditModal from "../modals/EditModal";
import { useState } from "react";   
function EditButton() {
    const [show, setShow] = useState(false);
      
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    return (
        <>
        <button className="edit-button"  onClick={handleShow} data-testid="edit-button"><i class="bi bi-pen"></i></button>
        <EditModal show={show} handleClose={handleClose} />
        </>
    );
}

export default EditButton;