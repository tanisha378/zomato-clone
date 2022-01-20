import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Route,Redirect} from 'react-router-dom';

//HOC
import HomeLayoutHoc from "./HOC/Home.HOC";
import RestaurantLayoutHoc from "./HOC/Restaurant.HOC";
import CheckoutLayoutHoc from "./HOC/Checkout.hoc";

//pages
import RestaurantPage from "./pages/RestaurantPage";
import Checkout from "./pages/CheckoutPage";
import GoogleAuth from "./pages/GoogleAuth";

//component
import Temp from "./Components/temp";
import Overview from "./Components/Restaurant/Overview";
import OrderOnline from "./Components/Restaurant/OrderOnline";
import Reviews from "./Components/Restaurant/Reviews/Reviews";
import Menu from "./Components/Restaurant/Menu/Menu";
import Photos from "./Components/Restaurant/Photos/Photos";






function App() {
  return (
    <>
        <Route path='/' exact>
        <Redirect to='delivery'/>
        </Route>
      
        <HomeLayoutHoc exact component={Temp} path="/:type"/>
        <HomeLayoutHoc path="/google/:token" exact component={GoogleAuth}/>
        <RestaurantLayoutHoc exact component={RestaurantPage} path="/restaurant/:id"/>
        <RestaurantLayoutHoc exact component={Overview} path='/restaurant/:id/overview' />
        <RestaurantLayoutHoc exact component={OrderOnline} path='/restaurant/:id/order-online' />
        <RestaurantLayoutHoc exact component={Reviews} path='/restaurant/:id/reviews' />
        <RestaurantLayoutHoc exact component={Menu} path='/restaurant/:id/menu' />
        <RestaurantLayoutHoc exact component={Photos} path='/restaurant/:id/photos' />
        
       
        <CheckoutLayoutHoc path='/checkout/orders' exact component={Checkout} />
    </>
  );
}

export default App;
