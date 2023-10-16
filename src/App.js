import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import ForgotPassword from './Pages/ForgotPassword'
import { ShopContextProvider } from './context/shop-context';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import PaymentPage from './Pages/PaymentPage';
import SizeContent from './Pages/SizeGuidePage/SizeContent';
import Navshoes from './Pages/Navshoes';

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
     <Navshoes/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/nike' element={<Shop />} />
        <Route path='/CartContent' element={<Cart/>} />
        <Route path='/product-detail/:id' element={<ProductDetail/>}></Route>
        <Route path='/forgot' element={<ForgotPassword/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/payment' element={<PaymentPage/>}></Route>
        <Route path='/sizeguide' element={<SizeContent/>}></Route>
        <Route path="/search/:query" element={<SearchResult/>} />  
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </ShopContextProvider>
    </div>
  );
}

export default App;
