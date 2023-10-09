import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import Shop from './Pages/Shop';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Shop' element={<Shop />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
