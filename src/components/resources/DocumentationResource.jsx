import React, {useContext} from 'react';
import { ItemContext } from '../ResourcesSection';
import EditButton from "../buttons/EditButton";
import DeleteButton from '../buttons/DeleteButton';

function DocumentationResource() {
    const item = useContext(ItemContext);
    
    return (
        <>
        <a href={item.fileUrl}>{item.title}</a><EditButton /><DeleteButton />
        </>
    );
}

export default DocumentationResource;