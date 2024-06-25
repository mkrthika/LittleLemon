
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import metaimg from './icons_assets/Logo .svg'

function App() {
  return (
    <>
      <meta name="og:description" content="We are family owned Mediterranean Restaurant, focused on
      traditional recipes, served with a Modern Twist"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:image" content={metaimg}/>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
