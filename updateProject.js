const mongoose = require('mongoose');
require('dotenv').config();

// Define the Project schema and model...
const projectSchema = new mongoose.Schema({
    projectName: String,
    cards: [{
        id: Number,
        image: String,
        header: String,
        title: String,
        text: String
    }]
});

const Project = mongoose.model('Project', projectSchema);

const booksyCrawlerProject = {
    projectName: 'Booksy Review Crawler', 
    cards: [ 
        
    {
        "id": 1,
        "image": "/googlemaps.jpeg",
        "header": "Project Overview",
        "title": "",
        "text": "The client is a Master Hairstylist with over 100 five star reviews on Booksy. Wouldn't it be nice if she had control of those reviews so that she can use them in her social media, website, and search engine marketing? I built a crawler to pull the booksy reviews to store them on her database and website."
    },
    {
        "id": 2,
        "image": "/security.png",
        "header": "The Crawler",
        "title": "",
        "text": "Sent to the Booksy url where it parsed through site element pulling the review, counting the number of stars for each review. "
    },
    {
        "id": 3,
        "image": "/messaging.png",
        "header": "Storage",
        "title": "",
        "text": "The crawler stored the review data in a mongodb databse"
    },
    {
        "id": 4,
        "image": "/googlemaps.jpeg",  
        "header": "Rendering the data on clients webpage",
        "title": "",
        "text": "The database sends the data to client's webpage"  
    },
    {
        "id": 5,
        "image": "/database.png",
        "header": "Content Planning",
        "title": "", 
        "text": "With complete access to her hard-earned reviews, client is informed various avenues to leverage the reviews in her marketing."
    },
    {
        "id": 6,
        "image": "/summarry.png",
        "header": "The Future",
        "title": "",
        "text": "Future versions of this application could employ direct integration with social media, Google Business Reviews, or CRM tools."
    }

    ]
}; 

const myPortfolioProject = {
    projectName: 'Portfolio App', 
    cards: [ 
        
    {
        "id": 1,
        "image": "/googlemaps.jpeg",
        "header": "Project Scope",
        "title": "",
        "text": "Showcase technical abilities in a visually appealing manner "
    },
    {
        "id": 2,
        "image": "/security.png",
        "header": "The Design",
        "title": "",
        "text": "The concept was to represents the different skills and sides of an a full-stack application."
    },
    {
        "id": 3,
        "image": "/messaging.png",
        "header": "The Animation",
        "title": "",
        "text": "Setting thing into motion involved complex 3-D animation and tight styling controls"
    },
    {
        "id": 4,
        "image": "/googlemaps.jpeg",  
        "header": "Render Each Cube Dynamically",
        "title": "",
        "text": "Insert a new project into the database and, VIOLA, a new cube appears where and how it is supposed to."  
    },
    {
        "id": 5,
        "image": "/database.png",
        "header": "The Database",
        "title": "", 
        "text": "With complete access to her hard-earned reviews, client is informed various avenues to leverage the reviews in her marketing."
    },
    {
        "id": 6,
        "image": "/summarry.png",
        "header": "Navigate",
        "title": "",
        "text": "The navigation window assists in getting to the Card (Cube Face) of your choosing. It is also pretty elegant. "
    }

    ]
}; 


function connectToMongoDB(booksyCrawlerProject) {
    const mongoURI = process.env.MONGO_URI;
    mongoose.connect(mongoURI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected successfully to MongoDB");
        // Call your functions here after successful connection
        updateProject(booksyCrawlerProject);
        // insertNewProject(booksyCrawler);
    });
}

function updateProject(booksyCrawlerProject) {
    const projectId = "65aea1dd31844caababdce64";

    Project.findByIdAndUpdate(
        projectId, 
        { $set: booksyCrawlerProject }, // Replace the entire document with booksyCrawler data
        { new: true, useFindAndModify: false }
    )
    .then(updatedProject => {
        console.log("Project updated:", updatedProject);
        process.exit(0);
    })
    .catch(err => {
        console.error("Error updating project:", err);
        process.exit(1);
    });
}

 

// const newCards = [
//     // ... Add new cards here ... 
//     {
//         "id": 1,
//         "image": "/googlemaps.jpeg",
//         "header": "Google Maps API",
//         "title": "Front",
//         "text": "Reliable Map and Location data, integration with Google Maps Servicees."
//     },
//     {
//         "id": 2,
//         "image": "/security.png",
//         "header": "Security & Access",
//         "title": "",
//         "text": "Password Hashing, Token Authentications, and Enterprise Grade Data Storage"
//     },
//     {
//         "id": 3,
//         "image": "/messaging.png",
//         "header": "Message Application",
//         "title": "",
//         "text": "Realtime messaging functionalities between app users, supported by websockets and dedicated database infastructure"
//     },
//     {
//         "id": 4,
//         "image": "/googlemaps.jpeg",  
//         "header": "Product Development Consulting",
//         "title": "Advertising and Product Sales",
//         "text": "Consulted on revenue generating possibilites that where adopted into the application"  
//     },
//     {
//         "id": 5,
//         "image": "/database.png",
//         "header": "MongoDb Database",
//         "title": "Services Included", 
//         "text": "Database Design, Configuration, & Implementation"
//     },
//     {
//         "id": 6,
//         "image": "/summarry.png",
//         "header": "Project Summary",
//         "title": "",
//         "text": "The client wishes to connect employers and job-seekers within a specific industry. The solution required a full-stack build to facilitate seamless communication, location data, GPS mapping, & scalable infrastructure along with payment gateways, etc. This continues to be a very exciting project."
//     }
    
// ];

 
function insertNewProject( data ) {

    console.log('Attempting to insert:', JSON.stringify(data, null, 2));

    Project.create(data)
    .then((result) => {
        console.log('New project added:', result);
        process.exit(0);
    })
    .catch((err) => {
        console.error('Error adding new project:', err);
        process.exit(1);
    });
}

 
connectToMongoDB(booksyCrawlerProject);
