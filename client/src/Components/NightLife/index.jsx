import React from 'react';

//component
import NightLifeCarousel from './NightLifeCarousel';

function Nightlife() {
    return (
     <div>
         <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
             Nightlife Restaurants in Delhi NCR
         </h1>
       <NightLifeCarousel />
     </div>
    )
}

export default Nightlife;
