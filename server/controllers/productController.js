const express = require('express')
const upload = require('../middlewares/upload')
const {uploadToCloudinary,removeFromCloudinary} =require('../cloudinary')
const product = require('../models/productModel')


module.exports.AddProduct = async (req, res) => {
        try{
            // console.log(req.file)
            const data = await uploadToCloudinary(req.file.path,"user-images")
            req.body.image_url = data.url   
            // console.log(req.body)
            const newProduct = new product({image_url:data.url}) 
            await newProduct.save();
            console.log(newProduct)
            res.json("Success")
        }
        catch(err){
            console.log("Error in insertion",err)
        }
  };

  module.exports.imageLink = async (req, res) => {
    try{
        // console.log(req.file)
       if(req.file)
       {
        // console.log(req.file)
        const data = await uploadToCloudinary(req.file.path,"user-images")
        const newProduct = new product({image_url:data.url}) 
        await newProduct.save();
        console.log(newProduct)
        // console.log(data)
        res.json("Success")
       }
    }
    catch(err){
        console.log("Error in insertion",err)
    }
};


  