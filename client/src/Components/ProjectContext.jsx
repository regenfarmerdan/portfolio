import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();
export const PopupContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projectData, setProjectData] = useState();

    const [isPopupActive, setIsPopupActive] = useState(false)
    const handlePopupOpen = () => setIsPopupActive(true);
    const handlePopupClose = () => setIsPopupActive(false);
 

    return (
        <ProjectContext.Provider value={{ projectData, setProjectData, isPopupActive, handlePopupOpen, handlePopupClose }}>
            {children}
        </ProjectContext.Provider>
    );
};
