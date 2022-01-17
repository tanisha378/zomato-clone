//libraries
import express from "express";

//database model
import {RestaurantModel} from "../../database/allModels"

//Validation 
import {ValidateRestaurantCity,
     ValidateRestaurantSearchString} from "../../validation/restaurant";

import {validateId} from "../../validation/common";     

const Router = express.Router();

//Route          /
//des            Get all the restaurant details based on city
//Params         none
//Access         Public
//Method         GET
Router.get("/", async (req, res) => {
    try{
        await ValidateRestaurantCity(req.query);
        //http://localhost:4000/restaurant/?city=ncr
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        if(restaurants.length === 0){
            return res.json({error: "No restaurants found in the city"});
        }

        return res.json({ restaurants })

    }catch(error) {
        res.status(500).json({error: error.message})
    }
});

//Route          /:_id
//des            Get individual restaurant details on based on id
//Params         none
//Access         Public
//Method         GET
//http://localhost:4000/restaurant/123456rhbfsbdnfgnfh
Router.get("/:_id", async (req, res) => {
    try{
        await validateId(req.params);
        const{ _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if(!restaurant) return res.status(404).json({error: "Restaurant not found"});

        return res.json({ restaurant });

    }catch(error) {
        res.status(500).json({error: error.message})
    }  
})

//Route          /search
//des            Get restaurant details on based on search string
//Params         :searchString
//Access         Public
//Method         GET
/**
 * searchString = Raj
 * results = {
 *        RajHotel
 *        RajRow
 *        RanRaj
 *        Ronraj
 * }
 */
Router.get("/search:searchString", async (req, res) => {
    try{
        await ValidateRestaurantSearchString(req.params);
        const { searchString} = req.params;
        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"}
        });

        if(!restaurants)
         return res
          .status(404).json({error: `No restaurants matched with ${searchString}`});

        return res.json({ restaurants});

    }catch(error) {
        res.status(500).json({error: error.message})
    }  
})

export default Router;