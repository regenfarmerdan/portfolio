// In your React component file
import React, {useContext, useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cube from './Cube'
import { ProjectContext } from './ProjectContext';
import './Grid.css'

// pass the specific card data while mapping 


const GridContainer = () => {
 
    const { projectData } = useContext(ProjectContext); //Array of projects fetched from db
    const [popUp, setPopup] = useState(false);

    const handlePopup = () => {
      setPopup(!popUp); // Toggle the popup state
    };  
    useEffect(()=> {console.log(popUp)}, [popUp])
    
    const rowsNeeded = Math.ceil(projectData.length / 2); // Calculate rows

    const popup = false; 
  
    return (
      <Container fluid className="grid-container">
        {[...Array(rowsNeeded)].map((_, rowIndex) => (
          <Row key={rowIndex} className='row'>
            {projectData
              .slice(rowIndex * 2, (rowIndex + 1) * 2) // Determine projects for this row
              .map((project, colIndex) => (
                <Col md={6} xs={12} key={colIndex} className={'col'} >
                  <Cube project={project} popUp={handlePopup} />
                  <h2 className={popUp ? 'hide' : ''}>{project.projectName}</h2>
                </Col>
            ))}
          </Row>
        ))}
      </Container>
    );
  
     
   
};

export default GridContainer;
