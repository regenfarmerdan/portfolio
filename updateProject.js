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
            "image": "/Social-Proof.png",
            "header": "Project Overview",
            "title": "",
            "text": "The client, a Master Hairstylist with over 100 five-star reviews on Booksy, needed a way to export and gain full control of this data, which can be used to garner social proof."
        },
        {
            "id": 2,
            "image": "/reviews.png",
            "header": "The Crawler",
            "title": "",
            "text": "I built and deployed a crawler to her Booksy URL, where it parsed through site elements, pulling her reviews and 'reading' star ratings."
        },
        {
            "id": 3,
            "image": "/blonde.jpeg",
            "header": "Storage",
            "title": "",
            "text": "The application copied the data and stored it in a database."
        },
        {
            "id": 4,
            "image": "/orangehairbooksy.jpeg",
            "header": "Rendering the Data on Client's Webpage",
            "title": "",
            "text": "The database sends the data back to the application to render our own star icons, fonts, and styles."
        },
        {
            "id": 5,
            "image": "/pinkhair.jpeg",
            "header": "Content Planning",
            "title": "",
            "text": "From here, this data can be sent to her personal website or social media. With complete access to her hard-earned reviews, the client is equipped to leverage her great work and grow her business faster."
        },
        {
            "id": 6,
            "image": "/ashleyyvettegoogle.png",
            "header": "The Future",
            "title": "",
            "text": "Future versions of this application could include direct API integration and automation with social media, Google Business Reviews, or CRM tools."
        }
    ]
};

const myPortfolioProject = {
    projectName: 'Portfolio Build', 
    cards: [ 
        {
            "id": 1,
            "image": "/portfolio_snapshot.png",
            "header": "Project Scope",
            "title": "",
            "text": "This app consolidates various technical proficiencies and serves to highlight other projects I've worked on."
        },
        {
            "id": 2,
            "image": "/mern.jpeg",
            "header": "The Design",
            "title": "",
            "text": "A cube was chosen to showcase the multiple technological facets of full-stack development."
        },
        {
            "id": 3,
            "image": "/grid-component.png",
            "header": "The Animation",
            "title": "",
            "text": "Animating the cube into an attractive motion pattern involved complex 3D animation, styling controls, and meticulous structuring of the code."
        },
        {
            "id": 4,
            "image": "/json-script.png",  
            "header": "Dynamicity",
            "title": "Capability of Action and Change",
            "text": "Simply add some information to the database, and voilà, a new cube appears, styled and ready for display!"  
        },
        {
            "id": 5,
            "image": "/simple-schema.png",
            "header": "The Database",
            "title": "Simple and Effective", 
            "text": "I aimed for a simple and repeatable design to support the addition of new projects. Check out this schema: less than 20 lines of code... Not bad at all."
        },
        {
            "id": 6,
            "image": "/responsive.png",
            "header": "Responsive",
            "title": "",
            "text": "This build looks and functions beautifully on small, medium, and large screens."
        }
    ]
};

const JobMatchApp = {
    projectName : 'JobMatchApp',
    cards: [

        {
            id: 1, 
            image: '/summarry.png', 
            header: 'Project Summary', 
            title: 'Job Matching Build',
            text: 'This App aims to bridge employers and job-seekers within a niche industry. Required a full-stack build to support seamless communication, location data, GPS mapping, and scalable infrastructure, including payment gateways. Continues to be an ambitious and evolving project.'
        },
        {
            id: 2,
            image: "/googlemaps.jpeg",
            header: "Google Maps API",
            title: "", 
            text: "Dependable map display and location data, powered by integration with Google Maps Services.",
        }, 
        {
            id: 3, 
            image: '/security.png',
            header: 'Security & Access Control',
            title: "",
            text: "Incorporates password hashing, token authentications, and enterprise-grade data storage for robust security."
        },
        {
            id: 4, 
            image: '/messaging.png',
            header: 'Messaging Application', 
            title: '',
            text: 'Facilitates real-time messaging between app users, underpinned by websockets and a dedicated database infrastructure.'
        }, 
        {
            id: 5, 
            image: '/googlemaps.jpeg',
            header: 'Product Development Consulting',
            title: '',
            text: 'Provided consultancy on revenue-generating possibilities that were successfully integrated into the application.'
        },
        {
            id: 6, 
            image: '/database.png',
            header: 'MongoDB Database Configuration', 
            title: '',
            text: 'Focused on database design, configuration, and implementation for efficient data management.'
        }, 
    ]
}



function connectToMongoDB(JobMatchApp) {
    const mongoURI = process.env.MONGO_URI;
    mongoose.connect(mongoURI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected successfully to MongoDB");
        // Call your functions here after successful connection
        updateProject(JobMatchApp);
        // insertNewProject(myPortfolioProject);
    });
}

function updateProject(JobMatchApp) {
    const projectId = "65ac4a170a25f60bdec3e2fa"; //make sure you have the right id to update the right project

    Project.findByIdAndUpdate(
        projectId, 
        { $set: JobMatchApp }, // Replace the entire document with booksyCrawler data
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

 
connectToMongoDB(JobMatchApp);
