import React from 'react';

//component
import DiningCarousel from './DiningCarousel';

function Dining() {
    return (
     <div>
         <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
             Dine-out Restaurants in Delhi NCR
         </h1>
       <DiningCarousel/>
     </div>
    )
}

export default Dining
