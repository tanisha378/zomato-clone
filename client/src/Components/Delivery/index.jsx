import React, { useState, useEffect } from "react";


// Component
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id:'123456',
      image:{
          images:[
              {
                  location: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"
              }
          ]
      },
      name:"Bakehouse Comfort",
      cuisine: ["Bakery", "Dessert", "Fastfood"],
      isPro: false,
      isOff: true,
      durationOfDelivery:47,
      restaurantReviewValue:4.7,

    },
    {
        _id:'123456',
        image:{
            images:[
                {
                    location: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"
                }
            ]
        },
        name:"Bakehouse Comfort",
        cuisine: ["Bakery", "Dessert", "Fastfood"],
        isPro: false,
        isOff: true,
        durationOfDelivery:47,
        restaurantReviewValue:4.7,

      },
      {
        _id:'123456',
        image:{
            images:[
                {
                    location: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"
                }
            ]
        },
        name:"Bakehouse Comfort",
        cuisine: ["Bakery", "Dessert", "Fastfood"],
        isPro: false,
        isOff: true,
        durationOfDelivery:47,
        restaurantReviewValue:4.7,

      },
      {
        _id:'123456',
        image:{
            images:[
                {
                    location: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"
                }
            ]
        },
        name:"Bakehouse Comfort",
        cuisine: ["Bakery", "Dessert", "Fastfood"],
        isPro: false,
        isOff: true,
        durationOfDelivery:47,
        restaurantReviewValue:4.7,

      }
  ]);


  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in NCR(Delhi)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;

