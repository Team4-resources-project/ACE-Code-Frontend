import React, {useContext} from 'react';
import { ItemContext } from '../ResourcesSection';

import EditButton from "../buttons/EditButton";
function DocumentationResource() {
    const item = useContext(ItemContext);
    
    return (
        <>
        <a href={item.fileUrl}>{item.title}</a><EditButton /><i class="bi bi-trash"></i>
        </>
    );
}

export default DocumentationResource;