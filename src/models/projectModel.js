const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
    id: Number,
    image: String,
    header: String,
    title: String,
    text: String
});

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    cards: [cardSchema] // An array of card items
});
module.exports = mongoose.model('Project', projectSchema);

