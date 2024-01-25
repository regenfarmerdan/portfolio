import React, { useState } from "react";
import './NavBar.css';

const MyNavbar = () => {
    const [showContact, setShowContact] = useState(false);

    const toggleContactInfo = () => {
        setShowContact(!showContact);
    };

  

    return (
        <div className="navbar">
            <div className={`${showContact ? 'showInfo' : 'nav'}`}>>
                <div onClick={toggleContactInfo}>
                    <h4>Contact</h4>
                </div>
                {showContact && (
                <>
                    <div>
                    <h5>
                        Email: <br/>danielalejandrotosta@gmail.com
                    </h5>
                    <h5>
                        Phone: <br/> 770 355 5283</h5>
                    </div>      
                </>
                )}
            </div>
        </div>
    );
};

export default MyNavbar;


 
