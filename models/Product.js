const mongoose =  require("mongoose");
const Category = require("./Category");
const Brand = require("./Brand")

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true}, 
        desc:{type:String, required:true}, 
        img:{type:String, required:true}, 
        categoriesId:{type: mongoose.Types.ObjectId, required:true, ref : Category}, 
        brandId : {type: mongoose.Types.ObjectId, ref : Brand},
        size:{type:String}, 
        color:{type:String}, 
        price:{type:Number, required:true}, 
      
    }, 
    {timestamps: true }
); 

module.exports = mongoose.model("Product", ProductSchema);