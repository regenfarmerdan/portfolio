const Project = require('../models/projectModel');

// Function to create a new project
const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllProjects = async (req, res) => {
    
    try {
        const projects = await Project.find(); // Find all projects
        console.log('projects are', projects)
        res.json(projects); // Send back the projects as JSON

    } catch (err) {
        res.status(500).json({ message: err.message }); // Send an error response if something goes wrong
    }
};


module.exports = { createProject, getAllProjects};
