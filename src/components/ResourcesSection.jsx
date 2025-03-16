import React from 'react';
import DocumentationResource from './resources/DocumentationResource';
import TutorialResource from './resources/TutorialResource';
import ExerciseResource from './resources/ExerciseResource';
import { createContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemContext = createContext();


function ResourcesSection({ items }) {
  if (!items || items.length === 0) {
    return <p>No hay recursos disponibles.</p>;
  }

      return (
        <>
        <Container className="fluid">
        <Row xs={1} md={2} lg={4}>
            {items.map((item) => (
                <Col>
                <ItemContext.Provider key={item.id} value={item}>
                    {item.category === 'documentation' && <DocumentationResource />}
                    {item.category === 'tutorials' && <TutorialResource />}
                    {item.category === 'exercises' && <ExerciseResource />}
                </ItemContext.Provider>
                </Col>
            ))}
            </Row>
        </Container>
        </>
    )
    }

export default ResourcesSection;