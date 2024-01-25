// src/Cube.js
import React, {useRef, useState, useEffect, useContext} from 'react';
import './Cube.css';
import ProjectCard from './Card'
import PopupCard from './PopupCard';

const Cube = (project) => {

  const projectData = [project.project.cards]
  const cardsArray = projectData[0];
  // const [cardSelect, setCardSelect] = useState(null); // Track the selected face
  const [isDefault, setIsDefault] = useState(true); // true: spinning and not zoomed, false: paused and zoomed
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [cardIndex, setCardIndex] = useState(null)
 
  useEffect(() => {

    console.log(' there has been an index change ' , cardIndex)
  }, []); // Dependency array with selected face 

  const handleSelect = (newIndex) => {
    setCardIndex(newIndex);
};

  const handleClosePopup = () => {
    setCardIndex(null)
  }
    

  // apply css class that sets the face into view
  const getFaceClass = (face) => `face ${face}`;

  // Determine the class to apply based on isDefault state
  const cubeClass = isDefault ? 'cube spinning' : 'cube spinning';

  return (
    <div className='cube-container'>
      <div className="scene">
        <div className={`cube ${cubeClass}`} style={{ transform: `rotateX(${cubeRotation.x || 0}deg) rotateY(${cubeRotation.y}deg)` }} >
          <div className={getFaceClass('front')} onClick={(e) => handleSelect(0)}>  
            <ProjectCard prop={cardsArray[0]}/>
          </div>
          <div className={getFaceClass('back')} onClick={(e) => handleSelect(0)}>
            <ProjectCard prop={cardsArray[1]}/>
          </div>
          <div className={getFaceClass('right')} onClick={(e) => handleSelect(0)}>
            <ProjectCard prop={cardsArray[2]}/>
          </div>
          <div className={getFaceClass('left')} onClick={(e) => handleSelect(0)}>
            <ProjectCard prop={cardsArray[3]}/>
          </div>
          <div className={getFaceClass('top')} onClick={(e) => handleSelect(0)}>
          <ProjectCard prop={cardsArray[4]}/>
          </div>
          <div className={getFaceClass('bottom')} onClick={(e) => handleSelect(0)}>
          <ProjectCard prop={cardsArray[5]}/>
          </div>
        </div>
      </div>
       {/* Conditional rendering of the pop-up card */}
       {cardIndex !== null && (
        <PopupCard 
          cardData={cardsArray[cardIndex]} // Defaults to first card in array
          onClose={handleClosePopup}
          onPaginate={handleSelect}
          index={cardIndex}
           
        />
      )}
    </div>   

  );
}

export default Cube;

