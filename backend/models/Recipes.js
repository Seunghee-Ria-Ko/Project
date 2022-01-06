const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    key: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        // lowercase: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        // lowercase: true
    },
    ingredients: {
        type: Array,
        required: true,
        trim: true,
        // lowercase: true
    },
    methods: {
        type: String,
        required: true,
        trim: true,
        // lowercase: true
    },
    detail: {
        type: String,
        required: true,
        trim: true,
        // lowercase: true
    }
},{
    versionKey: false 
});

const Recipes = mongoose.model("Recipes", recipeSchema, "recipes");

module.exports = Recipes;