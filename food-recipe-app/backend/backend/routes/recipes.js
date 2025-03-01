const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const auth = require('../middleware/auth');

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('creator', 'username');
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a recipe
router.post('/', auth, async (req, res) => {
  try {
    const { title, ingredients, instructions, cookingTime, imageUrl } = req.body;
    
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      cookingTime,
      imageUrl,
      creator: req.userId
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's recipes
router.get('/myrecipes', auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({ creator: req.userId });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update recipe
router.put('/:id', auth, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.creator.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete recipe
router.delete('/:id', auth, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.creator.toString() !== req.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await recipe.remove();
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 