const Recipes = require('../models/Recipes');

exports.getAllRecipes = async (req,res) => {
    try{
        let query = Recipes.find();

        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 50;
        const skip = (page -1)*pageSize;
        const total = await Recipes.countDocuments();

        const pages = Math.ceil(total / pageSize);

        query = query.skip(skip).limits(pageSize);

        const result = await query;

        res.status(200).json({
            status: 'success',
            count: result.length,
            page,
            pages,
            data: result
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Server Error"
        });
    }
};