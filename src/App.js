
import Footer from './Footer';
import HomePage from './HomePage';
import Nav from './Nav';
import About from './About'
import Menu from './Menu'
import Login from './Login'
import metaimg from './icons_assets/Logo .svg'
import { Route , Routes} from 'react-router-dom';
import OrderOnlineMenu from './OrderOnlineMenu';
import Register from './register';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';

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
        <Route path="reservations" element={<Main />} />
        <Route path="order-online" element={<OrderOnlineMenu />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="confirmbooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
