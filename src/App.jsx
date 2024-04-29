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

const App = () => {
  // setting up the usedispatch to dispatvh an action 
  const dispatch = useDispatch();
  // useselector for getting the state of the products 
  const productsData = useSelector((state) => state.products);
  // fetching products from the dummy api 
  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products').then(res => res.json())
      .then(data => dispatch(setProducts(data)));
    console.log(response + "fetched data ");
  };
  //  fetching products on initial render 
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <>
      <div className="">
        <NavBar />
        {/* routing setup */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App