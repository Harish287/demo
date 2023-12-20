// src/components/Pricing.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Pricing = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Men's Pricing</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Header as="h5">Basic</Card.Header>
            <Card.Body>
              <Card.Title>$19.99/month</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Header as="h5">Standard</Card.Header>
            <Card.Body>
              <Card.Title>$39.99/month</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Header as="h5">Premium</Card.Header>
            <Card.Body>
              <Card.Title>$59.99/month</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;
