import React from "react";
import { Button, Card, Col } from "react-bootstrap";

export default function Cart({ service }) {
  const { title, img, text } = service;
  return (
    <Col className="p-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="outline-dark">Interest</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
