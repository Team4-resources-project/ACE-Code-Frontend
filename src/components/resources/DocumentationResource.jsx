import React, { useContext } from "react";
import { ItemContext } from "../ResourcesSection";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import Card from "react-bootstrap/Card";


function DocumentationResource() {
  const item = useContext(ItemContext);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        <Card.Link href={item.fileUrl}>Abrir PDF</Card.Link>
        </Card.Text>
        <EditButton />
        <DeleteButton />
      </Card.Body>
    </Card>
  );
}

export default DocumentationResource;
