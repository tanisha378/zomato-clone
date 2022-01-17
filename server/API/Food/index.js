//libraries
import express from "express";

//database model
import {FoodModel} from "../../database/allModels"

//Validation
import {validateCategory, validateId,} from "../../validation/common";

const Router = express.Router();

//Route          "/r/:_id"
//des            Get all the food based on particular restaurant
//Params         :_id
//Access         Public
//Method         GET
Router.get("/r/:_id", async (req, res) => {
    try{
        await validateId(req.params);
        const { _id } = req.params;
        const foods = await FoodModel.find({restaurant: _id})

        return res.json({ foods });
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

//Route          "/c/:category"
//des            Get all the food based on particular category
//Params         :_id
//Access         Public
//Method         GET
Router.get("/c/:category", async (req, res) => {
    try{
        validateCategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({
            category: {$regex: category, $options: "i"},
        });

        if(!foods)
        return res
         .status(404).json({error: `No food matched with ${category}`});  

      return res.json({foods});  
    }catch(error) {
        res.status(500).json({error: error.message})
    }
})

export default Router;