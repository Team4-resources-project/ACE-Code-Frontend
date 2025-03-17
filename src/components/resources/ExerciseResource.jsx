import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import React, { useContext } from "react";
import { ItemContext } from "../ResourcesSection";
import Card from "react-bootstrap/Card";

function ExerciseResource() {
  const item = useContext(ItemContext);

  return (
    <Card>
      <Card.Img variant="top" src={item.fileUrl} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <EditButton />
        <DeleteButton />
      </Card.Body>
    </Card>
  );
}

export default ExerciseResource;
