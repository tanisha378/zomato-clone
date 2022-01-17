import React from 'react'
import {BsShieldLockFill} from 'react-icons/bs'

//redux
import { useSelector } from "react-redux";

//COMPONENT
import FoodItem from '../Components/Cart/FoodItem'
import AddressList from '../Components/Checkout/AddressList'

//razorpay
//import Razorpay from 'razorpay';

function CheckoutPage() {

    const address = [
        {
            name:"Home",
            address: "123 Main road"
        },
        {
            name:"Work",
            address:"123 Main St"
        },
        {
            name:"Other",
            address:"123 Main St"
        }
    ]

    const foods= [
        {
            
            image:"https://b.zmtcdn.com/data/dish_photos/f5b/a6356b78be8418d7e97c614b30f76f5b.jpg",
            name:"Paneer Butter Masala",
            price:"110",
            rating:3.5,
            description:"Rich, creamy and delicious paneer dish prepared using butter",
            quantity:1,
        },  
          {
            
            image:"https://b.zmtcdn.com/data/dish_photos/876/ea2718da9d3f01707ee3572e3f0f3876.jpg",
            name:"Special Rasoi Naan Thali",
            price:"170",
            rating:3,
            description:"[Chef's Special] Dal makhani+shahi paneer+2 naan+ mix veg+raita+salad+papad+rice",
            quantity:2,
            
          },
    ];
    
    const reduxStateCart = useSelector((globalState) => globalState.cart.cart);
 

  const payNow = () => {
    let options = {
      key: "rzp_test_NvG9RzyZfmx2kQ",
      amount:
        reduxStateCart.reduce(
          (total, current) => total + current.totalPrice,
          0
        ) * 100,
      currency: "INR",
      name: "Zomato Master",
      description: "Fast Delivery Service",
      image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      handler: (data) => {
        alert("Payment Successful");
        console.log(data);
      },
     
      theme: {
        color: "#e23744",
      },
    };
    let razorPay = new window.Razorpay(options);
    razorPay.open();
     
  };

    return (
       <div className='my-3 flex flex-col gap-3 items-center'>
           <h1 className='text-xl text-center md:text-2xl font-bold'>
               Checkout
           </h1>
           <div className='w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center'>
               <h3 className='text-lg font-semibold'>Summary</h3>
               <div className='flex w-full flex-col gap-2 items-center'>
                   <h5 className='text-base tracking-wider'>ORDER FROM</h5>
                   <div className='flex w-full flex-col items-center text-gray-400'>
                       <h4>Domino's Pizza</h4>
                       <small>GT World Mall, Maagdi Road, NCR Noida</small>
                   </div>
                   <div className='my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5'>
                       {reduxStateCart?.map((food) => (
                           <FoodItem key={food._id} {...food}/>
                       ))}
                   </div>
                   <div className='flex flex-col gap-3 w-full md:w-3/5 items-center'>
                       <h4 className='text-xl font-semibold'>Choose Address</h4>
                       <AddressList address={address}/>
                   </div>
               </div>
               <button onClick={payNow} className='flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg'>
                   Pay Securely<BsShieldLockFill/>
               </button>
           </div>
       </div>
    )
}
  

export default CheckoutPage
