//  app component act an parent container for the nested rendered component 
import React, { useEffect, useState } from 'react';
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
import { fetchProducts } from './api/api';
import SignUpDetails from './components/SignupDetails';
import ProfilePage from './Pages/ProfilePage';
import EditProfile from './Pages/EditProfile';
import CheckOut from './Pages/CheckOut';
import OrderSummary from './Pages/OrderSummary';
import PaymentPage from './Pages/PaymentPage';
import OrderConfirmation from './Pages/OrderConfirmation';
import OrderHistory from './Pages/OrderHistory';

const App = () => {
  //  state for handeling the category selection 
  const [selectedCategory, setSelectedCategory] = useState("home");
  console.log(selectedCategory)
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
        <NavBar selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>
        {/* routing setup */}
        <Routes>
          <Route path='/' element={<Main selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/signupdetails' element={<SignUpDetails />} />
          <Route path='/ordersummary' element={<OrderSummary />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/orderconfirmation' element={<OrderConfirmation />} />
          <Route path='/orderhistory' element={<OrderHistory />} />
        </Routes>
      </div>
    </>
  )
}

export default App