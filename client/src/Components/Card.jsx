 
// takes in data from context, grid, & cube parents components 
import { ProjectContext } from './ProjectContext'; // Adjust the path as necessary
import { Card, Col, Row } from 'react-bootstrap';
import './Cube.css'; // Make sure the path is correct
import { useContext } from 'react';
import './Card.css';

const ProjectCard = (card) => {
// 
    // console.log(card.prop.header)

    if (!card || card.length === 0) {
        // You can return a loading spinner, a message, or null
        return <div>Loading...</div>; // Or return null;
    }

    return ( 
        <div className='card-container card' style={{ height: '500px' }}>             
            <Card className="d-flex flex-column" style={{ height: '100%' }}>
                <Card.Img variant="top" src={card.prop.image} alt={card.prop.title} className="card-img-top" />
                <Card.Header>{card.prop.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{card.prop.title}</Card.Title>
                    <Card.Text>{card.prop.text}</Card.Text>
                </Card.Body>
            </Card>            
        </div>
       
    );
}; 

export default ProjectCard;