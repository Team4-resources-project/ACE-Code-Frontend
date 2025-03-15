import React, {useContext} from 'react';
import { ItemContext } from '../ResourcesSection';

function TutorialResource() {
    const item = useContext(ItemContext);
    const src = item.fileUrl;

    console.log("Renderizando TutorialResource");
    const extractVideoId = (src) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?/]+)/;
        const match = src.match(regex);
        return match ? match[1] : null;
    };

    const videoId = extractVideoId(src);

    if (!videoId) {
        return <p>URL de YouTube no válida</p>;
    }

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    return (
        <>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
    <img
        src={thumbnailUrl}
        alt="miniatura"
        style={{
            width: "100%",
            maxWidth: "640px",
            height: "auto",
            display: "block",
            border: "2px solid blue", 
        }}
    />
</a><i class="bi bi-trash"></i>
        </>
    );
}

export default TutorialResource;