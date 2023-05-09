import React from 'react'
import './ProductCard.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function ProductCard(props) {
  const[data,setData] = useState([])
  const {item} = props

  console.log("item")
 
  return (
    // <div style={{backgroundImage:`url(${item.image_url})`}} className='card product-card'>
    <>
    <a href={`/product/${item._id}`}>
    <div className='card product-card'>
          <img src={item.image_url} className='card-image' alt="" /> 

      <div className="card__overlay">
          <div class="overlay__text">
          <h3>{item.p_name}</h3>
        </div>
      </div>

    </div>
    </a>


    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Recipe</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
            <ul>
              {
                item.ingredients.map((ing)=>{
                  return(
                    <>
                      <li>ing</li>
                    </>
                  )
                })
              }
            </ul>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



    </>
  )
}
