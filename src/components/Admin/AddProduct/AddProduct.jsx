import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function AddProduct() {

  const navigate = useNavigate()

  const [values, setValues] = useState({});
  const [image, setImage] = useState([]);


  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(values)

      let formData=new FormData();
    formData.append("file",image)
    //  formData.append("upload_preset","blogpost")

   console.log(formData)
     await axios.post("http://localhost:2882/products/image",formData,{ headers: {
      'Content-Type': 'multipart/form-data'
  }}
     ).then((response)=>{
      const fileName=response.data.public_id;
      console.log(fileName)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  const [ingredients, setIngredients] = useState(['']);
  const [recipe, setRecipe] = useState(['']);


  function handleAddInput() {
    const newInputs = [...ingredients, ''];
    setIngredients(newInputs);

  }

  function handleAddInput1() {
    const newInputs = [...recipe, ''];
    setRecipe(newInputs);

  }

  function handleInputChange(event, index) {
    const newInputs = [...ingredients];
    newInputs[index] = event.target.value;
    setIngredients(newInputs);
    setValues({ ...values, ingredients: ingredients })
  }

  function handleInput1Change(event, index) {
    const newInputs = [...recipe];
    newInputs[index] = event.target.value;
    setRecipe(newInputs);
    setValues({ ...values, recipe: recipe })

  }



  return (
    <div className="front body">
      <div className="container login-container">
        <h2>Add Product</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>

            <input
              type="text"
              name="p_name"
              placeholder="Product Name"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
          <input type="file" name="image" className="form-control"   onChange={(e)=>{setImage(e.target.files[0]);console.log(image)} } required />
          </div>

        


          {ingredients.map((input, index) => (
            <input
              key={index}
              value={input}
              placeholder={`Ingredient ${index + 1}`}
              onChange={(event) => handleInputChange(event, index)}
            />
          ))}
          <button type='button' onClick={handleAddInput}>Add Input</button>

          {recipe.map((input, index) => (
            <input
              key={index}
              value={input}
              placeholder={`Recipe Step ${index + 1}`}
              onChange={(event) => handleInput1Change(event, index)}
            />
          ))}
          <button type='button' onClick={handleAddInput1}>Add Input</button>







          <div>
            <input
              type="number"
              placeholder="Quantity (in grams)"
              name="quantity"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Number of pieces"
              name="nop"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>

          <button type="submit">Submit</button>
          <span>
            Don't have an account ?<Link to="/register"> Register </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}
