//Libraries
import express from "express";
import passport from 'passport';

//Database Model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

//Route          "/:resid"
//des            Get all reviews for a particular restaurant
//Params         resid
//Access         Public
//Method         GET
Router.get("/:resid", async(req, res) => {
    try{
        const {resid} = req.params;
        const reviews = await ReviewModel.find({restaurants: resid});

        return res.json({reviews});

    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//Route          "/new"
//des            Adding new food/restaurant review and rating
//Params         none
//Access         Private
//Method         POST
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { _id } = req.session.passport.user._doc;
      const { reviewData } = req.body;
  
      await ReviewModel.create({ ...reviewData, user: _id });
  
      return res.json({ reviews: "Successfully Created Review" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

//Route          "/delete/:_id"
//des            Delete a specifc review
//Params         _id
//Access         Public
//Method         DELETE
Router.delete("/delete/:_id", async(req, res) => {
    try{
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Successfully deleted"});

    }catch(error){
        res.status(500).json({error: error.message});
    }
})

export default Router;
