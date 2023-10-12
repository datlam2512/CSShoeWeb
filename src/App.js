import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import Shop from './Pages/Shop';
import CartContent from './Pages/Cart/CartContent';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { ShopContextProvider } from './context/shop-context';
function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/nike' element={<Shop />} />
        <Route path='/CartContent' element={<CartContent/>} />
      </Routes>
      <Footer />
    </ShopContextProvider>
    </div>
  );
}

export default App;
