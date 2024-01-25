import React, {useState} from "react";
import "./PopupCard.css"; 
import { Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';  


// fix pagination tommorrow. 

const PopupCard = ({ cardData, onClose, onPaginate, index }) => {

  
  console.log('card data is at PopupCard.jsx ==> ', cardData)

    const [isClosing, setIsClosing] = useState(false); 
    console.log('indes recieved at popupcard.jsx >>>>  ', index)
     
    const handleNext = (e) => {
        e.preventDefault(); 
        if (index < 5) { // Assuming there are 6 cards (0-5 indices)
          console.log(index)
         // show forward arrow   
          onPaginate(index + 1);
        }
      };
    
      const handlePrevious = (e) => {
        e.preventDefault(); 
        if (index > 0) {
          onPaginate(index-1)
        }     
      }
  

    const handleClose = () => {
        setIsClosing(true); 
        setTimeout(() => {
          onClose(); // reset index at parent
        }, 300); 
      };

 
  return (
    //conditionally style css animations
    <div className={`popup-container ${isClosing ? 'popup-container-closing' : ''}`}>
      <div className={`popup-card ${isClosing ? 'popup-card-closing' : ''}`}>
      <div className='card-container card' style={{ height: '500px' }}>             
            <Card>
                <Card.Img variant="top" src={cardData.image} alt={cardData.title} className="card-img-top" />
                <Card.Header>{cardData.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{cardData.title}</Card.Title>
                    <Card.Text>{cardData.text}</Card.Text>
                </Card.Body>
            </Card>          
        </div>   
      </div>
      <div className="button-container">
        <button onClick={handlePrevious} className="arrow  " > 
          <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button onClick={handleClose}>
          <i class="bi bi-x"></i>
        </button>  
        <button onClick={handleNext} className="arrow  " > 
          <i class="bi bi-arrow-right-circle-fill"></i>
        </button>
        
       
      </div>
    </div>

  );
};

export default PopupCard;
