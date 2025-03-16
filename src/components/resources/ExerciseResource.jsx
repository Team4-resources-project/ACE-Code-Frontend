import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
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
        <div>{item.title}<EditButton /><DeleteButton /></div>
        </>
    );
}

export default ExerciseResource;