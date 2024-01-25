// Cool animation for future use

// src/Cube.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Cube.css';

const Cube = () => {
  return (
    <Container className='container'>
      <div className="scene">
        <div className="cube">
          <div className="face front">
            <Card>
                <Card.Body>
                  <Card.Title>Front Face</Card.Title>
                  <Card.Text>
                    This is the front face of the cube.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
          <div className="face back"> <Card>
              <Card.Body>
                <Card.Title>Back Face</Card.Title>
                <Card.Text>
                  This is the Back face of the cube.
                </Card.Text>
              </Card.Body>
            </Card></div>
          <div className="face right"> <Card>
              <Card.Body>
                <Card.Title>Right Face</Card.Title>
                <Card.Text>
                  This is the Back Face.
                </Card.Text>
              </Card.Body>
            </Card></div>
          <div className="face left"> 
            <Card>
              <Card.Body>
                <Card.Title>Face Left</Card.Title>
                <Card.Text>
                  This is the Left Face of the cube.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="face top">Face Top
            <Card>
                <Card.Body>
                  <Card.Title>Face Top</Card.Title>
                  <Card.Text>
                    This is the Top Face of the cube.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
          <div className="face bottom">This is the Bottom 
            <Card>
                <Card.Body>
                  <Card.Title>Face Bottom</Card.Title>
                  <Card.Text>
                    This is the Bottom Face of the cube.
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cube;

