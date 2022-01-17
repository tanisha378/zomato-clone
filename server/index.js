
require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//Database Connection
import ConnectDB from "./database/connection";

// google authentication config
import googleAuthConfig from "./config/google.config";

//private route authentication config
import privateRouteConfig from "./config/route.config";


//API
import Auth from "./API/Auth";
import Restaurants from "./API/Restaurants";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/Users";
import Image from "./API/Image"

//passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const zomato = express();
zomato.use(cors());
zomato.use(express.json())
zomato.use(helmet());
zomato.use(passport.initialize());



//Application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurants);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);
zomato.use("/image",Image)

zomato.listen(5000, ()=> {
  ConnectDB().then(() => {
       console.log("server is running")
  })
  .catch((error) => {
      console.log("server is running, but database connection failed.")
      console.log(error);
  })
}); 








   