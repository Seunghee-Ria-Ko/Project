const express = require("express");
const VegeRecipes = require('../models/VegeRecipes');
const vegeRouter = express.Router();

// vege

vegeRouter.get('/veges', async(req,res)=>{
    try{
        const veges = await VegeRecipes.find({});
        res.send(veges);
    }
    catch(err){
        res.status(500).send(err);
    }
})


//get one recipe by id
vegeRouter.get('/find/vege/:id', async (req, res) => {
    try {
        const veges = await VegeRecipes.findOne({ _id: req.params.id });
        res.send(veges);
    } catch {
        res.status(404);
        res.send({ error: "Vege doesn't exist!" });
    }
})



// //get one recipe using generic name
// vegeRouter.get("/vege/find/q", async (req, res) => {
//     try {

//         const vege_query = req.query;
//         console.log(vege_query);
//         const myres = await VegeRecipes.find(vege_query).exec();
//         res.send(myres);

//     } catch {
//         if (res.status(400)) {
//             res.send({ error: "Bad request" });
//         }
//         if (res.status(404)) {
//             res.send({ error: "Vege doesn't exist!" });
//         }
//     }
// })


//post route
vegeRouter.post('/add/vege', async (req, res) => {
    try {
        const newVege = new VegeRecipes(req.body);
        await newVegee.save();
        let newReci = res.send(newVege);
        console.log(newReci);

    }
    catch (er) {
        res.status(500).send(er);
    }

})

//Partial fields update
vegeRouter.patch('/update/vege/:id', async (req, res) => {
    try {
        await VegeRecipes.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            message: 'Vege updated successfully!'
        });
    }

    catch (error) {
        res.status(400).json({
            error: error
        });
    }
})

//Complete fields update
vegeRouter.put('/update/vege/:id', async (req, res) => {
    try {
        const vege1 = new VegeRecipes({
            _id: req.params.id,
            key: req.body.key,
            titlt: req.body.title,
            name: req.body.content,
            ingredient: req.body.url,
            methods: req.body.content,
            detail: req.body.url
        });
        await VegeRecipes.updateOne({ _id: req.params.id }, vege1);

        res.status(201).json({
            message: 'Vege updated successfully!'
        });

    }
    catch (error) {
        res.status(400).json({
            error: error
        });
    }

})


//Delete vege
vegeRouter.delete("/delete/vege/:id", async (req, res) => {
    try {
        await VegeRecipes.deleteOne({ _id: req.params.id })
        console.log("document deleted successfully");
        res.redirect('/veges');
    } catch {
        res.status(404);
        res.send({ error: "Vege doesn't exist!" });
    }
})



module.exports = vegeRouter;