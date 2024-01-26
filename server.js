const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const mongoose = require('mongoose');
const projectRoutes = require('./src/routes/projectRoute');
const cors = require('cors');
const path = require('path');
 
// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON bodies
app.use('/api/projects', projectRoutes);

// Serve static files from the React frontend app in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve the index.html file
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Connect to MongoDB
// Access restricted to current IP 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
