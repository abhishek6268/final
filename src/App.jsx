//  app component act an parent container for the nested rendered component 
import React, { useEffect } from 'react';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import ProductDetails from './Pages/ProductDetails';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/reducers/productSlice';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './components/Footer';
import { fetchProducts } from './api/api';
import SignUpDetails from './components/SignupDetails';

const App = () => {
  // setting up the usedispatch to dispatvh an action 
  const dispatch = useDispatch(); 
  // useselector for getting the state of the products 
  const productsData = useSelector((state) => state.products);
  // fetching products from the dummy api 
  const fetchProductsdetails = async () => {
    const response = await fetchProducts();
    dispatch(setProducts(response))
  };
  //  fetching products on initial render 
  useEffect(() => {
    fetchProductsdetails();
  }, [])
  return (
    <>
      <div className="">
        <NavBar />
        {/* routing setup */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signupdetails' element={<SignUpDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App