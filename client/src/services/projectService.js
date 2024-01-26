// Function to fetch projects from the backend
export const fetchProjects = async () => {
    try {
        const response = await fetch('${process.env.REACT_APP_API_BASE_URL}/api/projects');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('data at projectService.js ==> ', data)
        return data;
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        throw error; // Re-throw the error for handling by the caller
    }
};
