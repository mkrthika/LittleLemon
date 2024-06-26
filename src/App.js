
import Footer from './Footer';
import HomePage from './HomePage';
import Nav from './Nav';
import About from './About'
import Booking from './Booking'
import Menu from './Menu'
import OrderOnline from './OrderOnline'
import Login from './Login'
import metaimg from './icons_assets/Logo .svg'
import { Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className='main_container'>
      <meta name="og:description" content="We are family owned Mediterranean Restaurant, focused on
      traditional recipes, served with a Modern Twist"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:image" content={metaimg}/>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Booking />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
