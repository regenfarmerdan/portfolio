// ProjectContext.js
import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();
export const PopupContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projectData, setProjectData] = useState(null);

    return (
        <ProjectContext.Provider value={{ projectData, setProjectData }}>
            <PopupProvider>{children}</PopupProvider>
        </ProjectContext.Provider>
    );
};

export const PopupProvider = ({ children }) => {
    const [isPopupActive, setIsPopupActive] = useState(false);

    return (
        <PopupContext.Provider value={{ isPopupActive, setIsPopupActive }}>
            {children}
        </PopupContext.Provider>
    );
};
