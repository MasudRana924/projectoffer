import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './components/home/Home';
import AuthProvider from './context/AuthProvider';
import SignUp from './components/home/SignUp/SignUp';
import LognIn from './components/home/LogIn/LognIn';
import Cart from './components/home/cart/Cart';
import CheckOut from './components/home/checkout/CheckOut';
import Dashboard from './components/dashboard/Dashboard';
import MyOrders from './components/dashboard/MyOrders/MyOrders';
import MakeAdmin from './components/dashboard/makeadmin/MakeAdmin';
import ManageProducts from './components/dashboard/manageproducts/ManageProducts';
import PrivateRoute from './privateroute/PrivateRoute';
import AdminRoute from './privateroute/AdminRoute';
import DashboaredHome from './components/dashboard/dashboardhome/DashboaredHome';
import ManageOrders from './components/dashboard/manageorders/ManageOrders';
import MyReview from './components/dashboard/myreviews/MyReview';
import UpdateProduct from './components/dashboard/updateproduct/UpdateProduct';
import AddProduct from './components/dashboard/addproduct/AddProduct';
import PlaceOrder from './components/screen/PlaceOrder';
import Shipping from './components/screen/Shipping/Shipping';
import Details from './components/home/details/Details';
import Category from './components/home/category/Category';
import GroceryCategory from './components/home/category/Grocerries/GroceryCategory';
import FootwearCategory from './components/home/category/footwear/FootwearCategory';
import Search from './components/screen/search/Search';
import CategoryItems from './components/home/category/categoriesItems/CategoryItems';
import FashionsCategory from './components/home/category/fashions/FashionsCategory';
import ElectronicsCategory from './components/home/category/electronics/ElectronicsCategory';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }
  return (

    !loading && <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>



            <Route path="/searchh" element={<Search />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LognIn />}></Route>
            <Route path="/findcategory" element={<CategoryItems />}></Route>
            <Route path="/category" element={<Category />}>
              <Route exact path="/category" element={<GroceryCategory></GroceryCategory>}>
              </Route>
              <Route path={`/category/footwear`} element={<FootwearCategory />}></Route>
              <Route path={`/category/fashions`} element={<FashionsCategory />}></Route>
              <Route path={`/category/electronics`} element={<ElectronicsCategory />}></Route>
            </Route>




            <Route path="/placeorder" element={<PlaceOrder />}></Route>
            <Route path="/shipping" element={<Shipping />}></Route>
            <Route path="/details/:productId" element={<Details />}></Route>


            {/* private route */}

            <Route path="/cart" element={<PrivateRoute>
              <Cart />
            </PrivateRoute>}>
            </Route>

            <Route path="/checkout" element={<PrivateRoute>
              <CheckOut />
            </PrivateRoute>}>
            </Route>

            <Route path="/getmyorders" element={<MyOrders />}></Route>
            <Route path="/postreview" element={<MyReview />}></Route>

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>

              <Route exact path="/dashboard" element={<DashboaredHome>
              </DashboaredHome>}>
              </Route>

              <Route path="myorders" element={<MyOrders />}></Route>
              <Route path="myreview" element={<MyReview />}></Route>

              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>

              <Route path={`/dashboard/addproduct`} element={<AdminRoute>
                <AddProduct></AddProduct>
              </AdminRoute>}>
              </Route>

              <Route path={`/dashboard/manageproduct`} element={<AdminRoute>
                <ManageProducts></ManageProducts>
              </AdminRoute>}>
              </Route>

              <Route path={`/dashboard/manageproduct/:productId`} element={<AdminRoute>
                <UpdateProduct></UpdateProduct>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageorders`} element={<AdminRoute>
                <ManageOrders></ManageOrders>
              </AdminRoute>}>
              </Route>
            </Route>
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>


  );
}

export default App;
