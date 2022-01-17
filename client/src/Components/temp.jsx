import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch} from 'react-redux';

//redux action
import {getRestaurant} from "../redux/reducers/restaurant/restaurant.action";


//components
import Delivery from './Delivery/';
import Dining from './Dining';
import NightLife from '../Components/NightLife'
import Nutrition from './Nutrition';

function Temp() {
    const {type} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getRestaurant());
    },[])

    return (
      <>
         <div className='my-5'>
           {type === "delivery" && <Delivery/> }
           {type === "dining" && <Dining/>}
           {type === "night" && <NightLife/>}
           {type === "nutri" && <Nutrition/> }
          </div>    
      </>
    )
}

export default Temp
