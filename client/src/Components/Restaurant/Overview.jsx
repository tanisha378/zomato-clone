import React,{useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Slider from 'react-slick'
import {IoMdArrowDropright} from 'react-icons/io'
import ReactStars from 'react-rating-stars-component';

//components
import {NextArrow, PrevArrow} from '../CarouselArrow';
import MenuCollection from './MenuCollection';
import MenuSimilarRestaurantCard from './MenuSimilarRestaurantCard';
import ReviewCard from './Reviews/ReviewCard';
import MapView from './MapView';

function Overview() {

    const [menuImages, setMenuImages] = useState({
        images:[
            "https://b.zmtcdn.com/data/menus/843/3843/651bcd543345159337c3c443c95cf25f.jpg",
            "https://b.zmtcdn.com/data/menus/843/3843/a6aac953036ef7882149e2606cd65dc9.jpg",
            "https://b.zmtcdn.com/data/menus/843/3843/7ea3019dae987ca2658592ee65669ad9.jpg",
        ],
    })
    const [reviews, setReviews] = useState([
        {
            isRestaurantReview: false,
            createAt: "2020-07-05",
            fullName:"John Doe",
            reviewText:"Food was great, delivery was on time"
        },
        {
            isRestaurantReview: false,
            createAt: "2020-05-08",
            fullName:"John Doe",
            reviewText:"Food was great, delivery was on time"
        },
        {
            isRestaurantReview: false,
            createAt: "2020-01-25",
            fullName:"John Doe",
            reviewText:"Food was great, delivery was on time"
        }
    ])
    const [cuisine, setCuisine] = useState(["Mordern Indian", "Bar Food"]);
    const averageCost = 200;

    const {id} = useParams();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2, 
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

     const ratingChanged = (newRating) => {
         console.log(newRating);
     };
     
  //   "1234324234.343,23414324214.243"
  //   mapAddress?.split(",")   // ["1234324234.343", "23414324214.243"]
  //   map((item) => parseFloat(item)); // [1234324234.343, 23414324214.243]
     const getLatLong = (mapAddress) => {
         return mapAddress?.split(",").map(item => parseFloat(item))
     }

    return (
     <>
       <div className='flex flex-col md:flex-row gap-5 relative'>
         <div className='w-full md:w-8/12'>
            <h2 className='font-semibold text-lg md:text-xl my-4'>
                About this place
            </h2>
            <div className='flex justify-between items-center'>
                <h4 className='text-lg font-medium'>Menu</h4>
                <Link to={`restaurant/${id}/menu`}>
                <span className='flex items-center gap-1 text-zomato-400'>
                   See all menu <IoMdArrowDropright/>
                </span>
                </Link>
            </div>
            <div className='flex flex-wrap gap-3 my-4'>
                <MenuCollection menuTitle='Menu' pages='3' image={menuImages.images}/>
            </div>
            <h4 className='text-lg font-medium my-4'>Cuisine</h4>
            <div className='flex flex-wrap gap-2'>
                {cuisine.map((cuisineName, index) => (
                    <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full' key={index}>
                        {cuisineName}
                    </span>
                ))}
            </div>
            <div className='my-4'>
            <h4 className='text-lg font-medium '>Average Cost</h4>
            <h6>${averageCost} for one order (approx.)</h6> 
            <small className='text-gray-500'>
                Exclusive of applicable taxes and charges, if any 
            </small>
            </div>
            <div className='my-4'>
            <h4 className='text-lg font-medium my-4'>Similar Restaurants</h4>
            <div>
                <Slider {...settings}>
                    <MenuSimilarRestaurantCard 
                      image='https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg'
                      title='tea'
                     />
                     <MenuSimilarRestaurantCard 
                      image='https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg'
                      title='tea'
                     />
                     <MenuSimilarRestaurantCard 
                      image='https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg'
                      title='tea'
                     />
                     <MenuSimilarRestaurantCard 
                      image='https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg'
                      title='tea'
                     />
                     <MenuSimilarRestaurantCard 
                      image='https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg'
                      title='tea'
                     />
                     <MenuSimilarRestaurantCard 
                      image='https://b.zmtcdn.com/data/pictures/7/20057817/d8a88003fb8172df5aa6c0297a35e48e.jpeg'
                      title='tea'
                     />
                </Slider>
            </div>
          </div>
         <div className='flex flex-col-reverse'>
         <div className='my-4'>
              <h4 className='text-lg font-medium'>Rate your delivery experience</h4>
              <ReactStars count={5} onChange={ratingChanged} size={24} activeColor='#ffd700'/>
              {reviews.map((review, index) => (
                  <ReviewCard {...review} key={index}/>
              ))}
          </div>
          <div className='my-4 w-full md:hidden flex flex-col gap-4'>
              <MapView 
                title="McDonald's" 
                phno="+919967879546" 
                mapLocation={getLatLong("28.639483856802467, 77.3655478644507")} 
                address="K 4, Windsor Street, Vaibhav Khand, Indirapuram, Ghaziabad"
              />
          </div>
         </div>
         </div>
         <aside style={{height:"fit-content"}} className='hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white p-3 shadow-md flex-col gap-4 '>
            <MapView 
              title="McDonald's" 
              phno="+919967879546" 
              mapLocation={getLatLong("28.639483856802467, 77.3655478644507")} 
              address="K 4, Windsor Street, Vaibhav Khand, Indirapuram, Ghaziabad"
            /> 
         </aside>
       </div>      
     </>
    )
}

export default Overview
