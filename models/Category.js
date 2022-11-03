const mongoose =  require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true}, 
        desc:{type:String, required:true}, 
        products:{type:Array}, 
    }, 
    {timestamps: true }
); 

module.exports = mongoose.model("Category", CategorySchema);