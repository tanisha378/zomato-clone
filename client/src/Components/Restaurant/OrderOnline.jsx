import React,{useState} from 'react'
import {AiOutlineCompass} from 'react-icons/ai';
import {BiTimeFive} from 'react-icons/bi'

//component
import FloatMenuBtn from './OrderOnline/FloatMenuBtn';
import MenuListContainer from './OrderOnline/MenuListContainer';
import FoodList from './OrderOnline/FoodList';

function OrderOnline() {

    const [menu, setMenu] = useState([
      {
        name: "Recommended",
        items:[
          {
            name:"Kadai Paneer",
            image:"https://b.zmtcdn.com/data/dish_photos/f5b/a6356b78be8418d7e97c614b30f76f5b.jpg",
            isAddedToCart: false,
            rating:3,
            description:"Kadai paneer made with cottage cheese, capsicum/green bell peppers and Indian spices.",
            prics:"110",
          },
          {
            name:"Dal Makhani",
            image:"https://b.zmtcdn.com/data/dish_photos/181/7e65a193e68d79bb2c453316146e1181.jpg",
            isAddedToCart: true,
            rating:3,
            description:"Creamy & buttery Dal Makhani",
            prics:"100",
          },
          {
            name:"Mixed Veg",
            image:"https://b.zmtcdn.com/data/dish_photos/999/5a6994453343b057b2c76c0537145999.jpg",
            isAddedToCart: false,
            rating:3,
            description:"Kadai paneer made with cottage cheese, capsicum/green bell peppers and Indian spices.",
            prics:"110",
          },
          {
            name:"Paneer Butter Masala",
            image:"https://b.zmtcdn.com/data/dish_photos/f5b/a6356b78be8418d7e97c614b30f76f5b.jpg",
            isAddedToCart: false,
            rating:3.5,
            description:"Rich, creamy and delicious paneer dish prepared using butter",
            prics:"110",
          },
          {
            name:"Special Rasoi Naan Thali",
            image:"https://b.zmtcdn.com/data/dish_photos/876/ea2718da9d3f01707ee3572e3f0f3876.jpg",
            isAddedToCart: false,
            rating:3,
            description:"[Chef's Special] Dal makhani+shahi paneer+2 naan+ mix veg+raita+salad+papad+rice",
            prics:"170",
          },
        ]
      },
      {
        name: "Today's Exclusive Dishes",
        items:[]
      },
      {
        name: "Chinense Staters",
        items:[]
      },
      {
        name: "Momos",
        items:[]
      },
      {
        name: "Breads",
        items:[]
      },
      {
        name: "Rolls",
        items:[]
      },
      {
        name: "Rice and Biryani",
        items:[]
      },
      {
        name: "Burger",
        items:[]
      },
    ])
    const [selected, setSelected] = useState("Recommended")

    const onClickHandler = (e) => {
        if(e.target.id) {
            setSelected(e.target.id);
        }
        return
    }
    return (
    <>
    <div className="w-full h-screen flex">
      <aside className="hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
        {menu.map((item, index) => (
          <MenuListContainer
            {...item}
            key={index}
            onClickHandler={onClickHandler}
            selected={selected}
          />
        ))}
      </aside>
      <div className="w-full px-3 md:w-3/4">
        <div className="pl-3 mb-4">
          <h2 className="text-xl font-semibold">Order Online</h2>
          <h4 className="flex items-center gap-2 font-light text-gray-500">
            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
          </h4>
        </div>
        <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
          {menu.map((item, index) => (
            <FoodList key={index} {...item} />
          ))}
        </section>
      </div>
    </div>
    <FloatMenuBtn
      menu={menu}
      onClickHandler={onClickHandler}
      selected={selected}
    />
  </>
);
}

export default OrderOnline
