import EditButton from "../buttons/EditButton";
import React, {useContext} from 'react';
import { ItemContext } from '../ResourcesSection';

function ExerciseResource() {
    const item = useContext(ItemContext);
    
    return (
        <>
        <div>
        <img src={item.fileUrl} alt={item.title} 
        style={{
            width: "100%",
            maxWidth: "100px",
            height: "auto",
            display: "block",
            border: "2px solid blue", 
        }} />
        </div>
        <div>{item.title}<EditButton /><i class="bi bi-trash"></i></div>
        </>
    );
}

export default ExerciseResource;