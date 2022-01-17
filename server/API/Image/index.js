import express from "express";
import AWS from 'aws-sdk';
import multer from 'multer';

//Database Modell
import { ImageModel } from "../../database/allModels";
const Router = express.Router()

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


//utility function
import {s3Upload} from '../../utils/s3';

/**
 * Router       /
 * Des          Upload given img to s3 bucket and save file link to mongodb
 * Params       _id
 * Access       Public
 * Method       POST
 */
Router.post("/", upload.single("file"), async (req, res) => {
  try{
     const file = req.file;

     //s3 bucket options
      const bucketOptions = {
        Bucket: "zomato-master-d0721",
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",//ACCESS CONTROL LIST

      };

      const uploadImage = await s3Upload(bucketOptions);

      const saveImageToDatabase = await ImageModel.create({images: [{location: uploadImage.Location}]
      })

      return res.status(200).json(saveImageToDatabase)

  }catch(error){
    return res.status(500).json({error: error.message})
  }
});

/**
 * Router       /
 * Des          get images
 * Params       _id
 * Access       Public
 * Method       GET
 */
 Router.get("/:_id", async (req, res) => {
  try{
      const {_id} = req.params;
      const image = await ImageModel.findById(_id)
   return res.status(200).json({image});
  }catch(error){
      return res.status(500).json({error: error.message});
  }
});


export default Router;

