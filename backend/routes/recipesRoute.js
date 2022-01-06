const express = require("express");
const Recipes = require("../models/Recipes");
const router = express.Router();

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipes.find({});
    res.send(recipes);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get one recipe by id
router.get("/find/recipe/:id", async (req, res) => {
  try {
    const recipes = await Recipes.findOne({ _id: req.params.id });
    res.send(recipes);
  } catch {
    res.status(404);
    res.send({ error: "Recipe doesn't exist!" });
  }
});

//get one recipe using generic name
// router.get("/recipe/find/q", async (req, res) => {
//     try {

//         const recipe_query = req.query;
//         //if(titbit_query.hasOwnProperty("generic_name")){
//         //console.log("True!");

//         console.log(recipe_query);
//         const myres = await Recipes.find(recipe_query).exec();
//         res.send(myres);

//     } catch {
//         if (res.status(400)) {
//             res.send({ error: "Bad request" });
//         }
//         if (res.status(404)) {
//             res.send({ error: "Recipe doesn't exist!" });
//         }
//     }
// })

// post route (add new recipe to database)
router.post("/add/recipe", async (req, res) => {
  try {
    //new record (new document)
    const newRecipe = new Recipes(req.body);

    //save it
    await newRecipe.save();

    //try to log it
    let newReci = res.send(newRecipe);
    console.log(newReci);
  } catch (er) {
    res.status(500).send(er);
  }
});

// router.post("/add/recipe", async (req, res) => {
//     const { key, title, name, ingredients, methods, detail } = req.body;

//     let newRecipe = new Recipes({
//         key,
//         title,
//         name,
//         ingredients,
//         methods,
//         detail
//     });

//     try {
//         newRecipe = await newRecipe.save();
//         res.send(newRecipe);
//     } catch (err) {
//         res.status(500).send(err);
//         console.log(err);
//     }
// })

//Partial fields update
router.patch("/update/recipe/:id", async (req, res) => {
  try {
    await Recipes.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      message: "Recipe updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

//Complete fields update
router.put("/update/recipe/:id", async (req, res) => {
  try {
    const recipe1 = new recipe({
      _id: req.params.id,
      key: req.body.key,
      title: req.body.title,
      name: req.body.name,
      ingredient: req.body.ingredient,
      methods: req.body.methods,
      detail: req.body.detail,
    });
    await Recipes.updateOne({ _id: req.params.id }, recipe1);

    res.status(201).json({
      message: "Recipe updated successfully!",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});

//Delete recipe
router.delete("/delete/recipe/:id", async (req, res) => {
  try {
    await Recipes.deleteOne({ _id: req.params.id });
    console.log("document deleted successfully");
    res.redirect("/recipes");
  } catch {
    res.status(404);
    res.send({ error: "Recipe doesn't exist!" });
  }
});

module.exports = router;
