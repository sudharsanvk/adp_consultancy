import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import VegProducts from './components/VegProducts/VegProducts'
import NVProducts from './components/NVProducts/NVProducts'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import AddProduct from './components/Admin/AddProduct/AddProduct'
import AdminProduct from './components/Admin/Product/Product'
import Product from './components/Product/Product'
import EditProduct from './components/Admin/Products/Products'
import AdminProducts from './components/Admin/Products/Products'
import Products from './components/Products/Products'

export default function Routing() {
  return (
    <>
    
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/veg" element={<VegProducts/>} />
            <Route exact path="/nv" element={<NVProducts/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/product/:id" element={<Product/>} />

            <Route exact path="/admin/add" element={<AddProduct/>} />
            <Route exact path="/admin/products" element={<AdminProducts/>} />
            <Route exact path="/admin/product/:id" element={<AdminProduct/>} />

        </Routes>
    </BrowserRouter>
    </>    
  )
}
