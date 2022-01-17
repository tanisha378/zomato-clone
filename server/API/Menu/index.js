//Libraries
import express from "express";

//Database Modal
import {MenuModel, ImageModel} from "../../database/allModels";

const Router = express.Router()

/**
 * Router       /list
 * Des          Get all list of menu based on restaurant id
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/list/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const menu = await MenuModel.findById(_id)

        if(!menu){
            res.status(404).json({error: "No menu present for this restaurant"});
        }
     return res.json({menu});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/**
 * Router       /image/:_id
 * Des          get all list of menu images with restaurant id
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/image/:_id", async (req, res) => {
    try{
    const {_id} = req.params;
    const menuImage = await ImageModel.findOne(_id);

    if(!menuImage){
        res.status(404).json({error: "No menu present for this restaurant"});
    }

    return res.json({menuImage})

    }catch(error){
        return res.status(500).json({error: error.message});
    }
})

export default Router;
