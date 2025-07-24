import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { CookiesProvider } from 'react-cookie';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/open-account' element={<SignupPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<NotFound />} /> 
    </Routes>
    <Footer />
  </BrowserRouter>
  </CookiesProvider>
);
