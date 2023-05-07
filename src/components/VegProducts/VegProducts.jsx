import React from 'react'
import Navbar from '../Navbar/Navbar'
import zippy from '../../images/zippy.png'
import zippy_logo from '../../images/zippy logo.png'

import './VegProducts.css'
import ProductCard from '../ProductCard/ProductCard'
import Footer from '../Footer/Footer'

export default function VegProducts() {
  return (
    <>
        <Navbar/>
        <div className="zippy">
            <img src={zippy} alt="" />
        </div>

        <div className="zippy-logo">
            <img src={zippy_logo} alt="" />
        </div>

        <h2 className='product-type' >Veg   Prodcuts</h2>

        <div className="search-box">
            <input type="search" name="" id="" placeholder='Search What you Love'/>
        </div>

        <div className="product-card-group">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

        <div className="product-card-group">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

        <div className="product-card-group">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

        <Footer/>

    </>
  )
}
