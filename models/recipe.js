const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
recipeName : { type:  String, description: "Required Field", required: true },
ingredients : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('recipe', recipeSchema);