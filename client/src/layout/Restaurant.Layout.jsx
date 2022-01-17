import React,{useState, useEffect} from 'react'
import {TiStarOutline} from 'react-icons/ti';
import {RiDirectionLine, RiShareForwardLine} from 'react-icons/ri';
import {BiBookmarkPlus} from 'react-icons/bi';

//redux
import {useDispatch} from 'react-redux'
import { getCart } from '../redux/reducers/cart/cart.action';

//component
import Navbar from '../Components/Navbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import InfoButton from '../Components/Restaurant/InfoButton';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import Tabs from '../Components/Restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

function RestaurantLayout({children}) {

  const [restaurant,setRestaurant] = useState({
      images: [
         "https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg",
         "https://b.zmtcdn.com/data/pictures/7/20057817/2f09573d380c5a12511da422b3448099.jpeg",
         "https://b.zmtcdn.com/data/pictures/7/20057817/86dedfcb6415eeb4585c5bc1e30da173.jpg",
         "https://b.zmtcdn.com/data/pictures/7/20057817/f9085d1bcb4b8b5556cfa62b21a06927.jpeg",
         "https://b.zmtcdn.com/data/pictures/7/20057817/f9085d1bcb4b8b5556cfa62b21a06927.jpeg",    
     ],
      name:"Bakehouse Comfort",
      cuisine:"Dessert, Bakery, Fast Food",
      address:"Mehrauli New Delhi",
      restaurantRating:4.7,
      deliveryRating:3.1,
  }) 

  const [images, setImages] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart());
  }, []);

 return (
    <>
     <Navbar/>
     <div className='container mx-auto px-4 lg:px-20 pb-10'>'
        <ImageGrid images={restaurant.images}/>
        <RestaurantInfo 
       name={restaurant?.name} 
       restaurantRating={restaurant?.restaurantRating || 0}
       delivertRating={restaurant?.deliveryRating|| 0}
       cuisine={restaurant?.cuisine}
       address={restaurant?.address}
     />  
      <div className='my-4 flex flex-wrap gap-3 mx-auto'>
       <InfoButton isActive>
         <TiStarOutline /> Add Review
       </InfoButton>
       <InfoButton>
         <RiDirectionLine /> Direction
       </InfoButton>
       <InfoButton>
         <BiBookmarkPlus /> Bookmark
       </InfoButton>
       <InfoButton>
         <RiShareForwardLine /> Share
       </InfoButton>
     </div>
     <div className='my-10'>
       <Tabs/>
     </div>
     {children}
     </div> 
     <CartContainer/>
    
    </>
)
}

export default RestaurantLayout;
