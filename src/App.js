import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import HomePage from './Pages/General/Home'
import LoginPage from './Pages/Login/Login'
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Footer from './Pages/General/Footer';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import { ShopContextProvider } from './context/shop-context';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import PaymentPage from './Pages/Payment/PaymentPage';
import SizeContent from './Pages/SizeGuide/SizeContent';
import Navshoes from './Pages/General/Navshoes';
import SearchResult from './Pages/General/SearchResult';
import PrivacyPolicy from './FooterNav/PrivacyPolicy';
import ReturnPolicy from './FooterNav/ReturnPolicy';
import TermAndCondition from './FooterNav/Term&Condition';
import Shipment from './FooterNav/Shipment';
import PaymentDetail from './FooterNav/PaymentDetail';
import QuestionAnwser from './FooterNav/QuestionAnwser';
import CreateYourOwnPage from './Pages/CreateYourOwn/CreateYourOwnPage';
import CreateAccountpage from './Pages/CreateAccount/CreateAccountpage'
import Blogs from './Pages/BlogPages/Blog'
import BlogDetail from './Pages/BlogPages/BlogDetail';
import Search from 'antd/es/input/Search';
import AdminDashBoard from './Pages/AdminPage/Admin'
import { UserContext } from './context/user-context';
import AccountPage from './Account/AccountPage';
import { ToastContainer } from 'react-toastify';
import AdminAddProduct from './Pages/AdminPage/AdminAddProduct';
import AdminEditProduct from './Pages/AdminPage/AdminEditProduct';

import PurchaseHistory from './Account/PurchaseHistory';
import PurchaseHistoryDetail from './Account/PurchaseHistoryDetail';

import AdminPayment from './Pages/AdminPage/AdminPayment';
import AdminBlog from './Pages/AdminPage/AdminBlog';
import AdminAddBlog from './Pages/AdminPage/AdminAddBlog';
import { useSelector } from 'react-redux';

function App() {
  const [user, setUser] = React.useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);

  const showAlertAndNavigate = () => {
    window.alert("Bạn không phải là admin");
    window.location.href = "/Account";
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <ShopContextProvider>
          <div className='header'>
            <Navshoes />
          </div>
          <div className='Body-main'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/Login' element={<LoginPage />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/CartContent' element={<Cart />} />
              <Route path='/product-detail/:id' element={<ProductDetail />}></Route>
              <Route path='/blog-detail/:id' element={<BlogDetail />}></Route>
              <Route path='/forgot' element={<ForgotPassword />}></Route>
              <Route path='/about' element={<AboutUs />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/payment' element={<PaymentPage />}></Route>
              <Route path='/sizeguide' element={<SizeContent />}></Route>
              <Route path="/search/:query" element={<SearchResult />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/shipment' element={<Shipment />} />
              <Route path='/return-policy' element={<ReturnPolicy />} />
              <Route path='/payment-detail' element={<PaymentDetail />} />
              <Route path='/term-and-conditions' element={<TermAndCondition />} />
              <Route path='/question-anwser' element={<QuestionAnwser />} />
              <Route path='/create' element={<CreateAccountpage />} />
              <Route path='/createyourown' element={<CreateYourOwnPage />} />
              <Route path='/blogs' element={<Blogs />} />
              {currentUser.token ? ( 
                <>
                  {currentUser.isAdmin ? (
                    <Route path="/admin" element={<AdminDashBoard />} />
                  ) : (
                    <Route
                      path="/admin"
                      element={<Navigate to="/Account" replace />}
                      onClick={showAlertAndNavigate}
                    />
                  )}
                  <Route path="/Account" element={<AccountPage />} />
                </>
              ) : (
                <>
                  <Route path="/admin" element={<Navigate to="/Login" />} /> {/* Redirect to Login if not logged in */}
                  <Route path="/Account" element={<Navigate to="/Login" />} /> {/* Redirect to Login if not logged in */}
                </>
              )}
              <Route path='/admin/product/:id' element={<AdminEditProduct />}></Route>
              <Route path='/admin/add-product' element={<AdminAddProduct />}></Route>

              <Route path='/Account/purchase-history' element={<PurchaseHistory />}></Route>
              <Route path='/Account/purchase-history/:id' element={<PurchaseHistoryDetail />}></Route>

              <Route path='/admin/payment' element={<AdminPayment />}></Route>
              <Route path='/admin/blog' element={<AdminBlog />}></Route>
              <Route path='/admin/add-blog' element={<AdminAddBlog />}></Route>

            </Routes>
          </div>
          <div className='Footer-main'>
            <Footer />
          </div>
        </ShopContextProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
