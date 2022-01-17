import React, {useState} from 'react'

//component
import MenuCollection from '../MenuCollection'


function Menu() {
    const [menus] = useState([
       "https://b.zmtcdn.com/data/menus/843/3843/651bcd543345159337c3c443c95cf25f.jpg",
       "https://b.zmtcdn.com/data/menus/843/3843/a6aac953036ef7882149e2606cd65dc9.jpg",
       "https://b.zmtcdn.com/data/menus/843/3843/7ea3019dae987ca2658592ee65669ad9.jpg",
       
      ])

    return (
        <div className='flex flex-wrap gap-3'>
           <MenuCollection menuTitle='Menu' pages={menus.length} image={menus}/>
        </div>
    )
}

export default Menu
