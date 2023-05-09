import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Product.css'

import veg from '../../images/veg-icon.png'
import nv from '../../images/nv-veg-icon.png'

export default function Product() {

    const id = useParams().id;
    console.log(id)
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:2882/products/get/${id}`)
        .then((data)=>{
            setData(data.data)
            
            console.log(data.data)
        }) 
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='full-page'>
        <Navbar/>

      

        <div className="product-page">

          
            {
                data.category==="Veg"?
                (<img src={veg} className='veg-nv-icon' alt="" />):
                (<img src={nv} className='veg-nv-icon' alt="" />)
            }
          

            <div className="product-img">
                <img src={data.image_url} alt="" />
            </div>

            <div className="product-details">

                <a className='add-to-cart' href="">
                <i class="fa-solid fa-cart-plus"></i>
                </a>

                <div className="product-name">
                    {data.p_name}
                </div>
                <div className="p-category">
                    {data.category}
                </div>
                <div className="price">
                    ₹ {data.price}
                </div>
                <div className="quantity">
                    {data.quantity}
                </div>
                <div className="nop">
                    {data.nop}
                </div>

                <div className="recipe-ingredients">
                    <button type="button" class="recipe-btn btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ingredients
                    </button>

                    <button type="button" class="recipe-btn btn btn-warning" data-bs-toggle="modal" data-bs-target="#recipeModal">
                    Recipe
                    </button>
                </div>
            </div>
        </div>


<div class="modal fade" id="recipeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Recipe</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

      <ul>
              {
               data.recipe!=null?(
                    data.recipe.map((ing)=>{
                        return(
                            <>
                            {
                                ing!='' ?(<>
                                <li>{ing}</li>
                                </>):(<></>)
                            }               
            
                            </>
                          )
                      })
                ):
                (
                    <>
                           <li>{data.recipe}</li>
                          </>
                )
              }
            </ul>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ingredients</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

      <ul>
              {
                data.ingredients!=null?(
                    data.ingredients.map((ing)=>{
                        return(
                          <>
                            {
                                ing!='' ?(<>
                                <li>{ing}</li>
                                </>):(<></>)
                            }    
                          </>
                        )
                      })
                ):
                (
                    <>
                           <li>{data.ingredients}</li>
                          </>
                )
              }
            </ul>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>

  )
}
