const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  p_name: {
    type: String,
    required: [true, "Product name is required"],
    unique: true,
  },
  image_url:{
    type:String,
    required:[true,"Upload the image"]
  },
  ingredients : { 
    type : Array , 
    "default" : [],
    required:[true,"Ingredients is required"] 
  },
  recipe:{
    type:Array,
    "default":[],
    required:[true,"Recipe is required"],
  }, 
  quantity:{
    type:Number,
    required:[true,"Quantity is required"]
  },
  nop:{
    type:Number,
    required:[true,"Number of pieces is required"]
  }
});



module.exports = mongoose.model("Products", productSchema);
