import {useState, useEffect, useContext} from 'react'
import { ProjectContext } from './Components/ProjectContext';
import { PopupProvider } from './Components/ProjectContext';
import './App.css';
import GridContainer from './Components/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProjects } from './services/projectService';
import MyNavbar from './Components/NavBar';

function App() {

  const { projectData, setProjectData } = useContext(ProjectContext);

  useEffect(() => {
    const loadData = async () => {
        try {
            const data = await fetchProjects();
            setProjectData(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    loadData();
}, []);  

if (!projectData || projectData.length === 0) {
  // You can return a loading spinner, a message, or null
  return <div>Loading...</div>; // Or return null;
}
  return (

    <div>
      <PopupProvider>
        <MyNavbar />   
        <GridContainer />
      </PopupProvider>
    </div>
       
   
       
  );
}

export default App;
