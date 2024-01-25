const express = require('express');
const router = express.Router();
const { createProject, getAllProjects } = require('../controllers/projectController');

router.use((req, res, next) => {
    console.log(`Received ${req.method} request at '${req.originalUrl}'`);
    next(); // Proceed to the next middleware/route handler
});

// GET route to retrieve all projects
router.get('/', getAllProjects);

// POST route to create a new project
router.post('/', createProject);

module.exports = router;

