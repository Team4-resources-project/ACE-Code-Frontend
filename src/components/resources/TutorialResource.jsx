import React, { useContext } from "react";
import { ItemContext } from "../ResourcesSection";
import DeleteButton from "../buttons/DeleteButton";
import Card from "react-bootstrap/Card";

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
     <Card>
      <Card.Link href={videoUrl}>
      <Card.Img variant="top" src={thumbnailUrl} alt={item.title} />
      </Card.Link>
      <Card.Body>
        <DeleteButton />
      </Card.Body>
    </Card>
      
  );
}

export default TutorialResource;
