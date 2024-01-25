// In your React component file
import React, {useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cube from './Cube'
import { ProjectContext } from './ProjectContext';
import './Grid.css'

// pass the specific card data while mapping 


const GridContainer = () => {
 
    const { projectData, isPopupActive } = useContext(ProjectContext); //Array of projects fetched from db
    
    
    const rowsNeeded = Math.ceil(projectData.length / 2); // Calculate rows
  
    return (
      <Container fluid className="grid-container">
        {[...Array(rowsNeeded)].map((_, rowIndex) => (
          <Row key={rowIndex} className='row'>
            {projectData
              .slice(rowIndex * 2, (rowIndex + 1) * 2) // Determine projects for this row
              .map((project, colIndex) => (
                <Col md={6} xs={12} key={colIndex} className='col'>
                 {!isPopupActive && <h2 className='project-name'>{project.projectName}</h2>}
                  <Cube project={project} />
                  {/* <h1>{project.projectName}</h1> */}
                  {isPopupActive && <h1 className='project-name'>{project.projectName}</h1>}
                </Col>
            ))}
          </Row>
        ))}
      </Container>
    );
  
     
   
};

export default GridContainer;
