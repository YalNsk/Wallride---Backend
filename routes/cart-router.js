const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const Cart = require("../models/Cart");
const productRouter = require("./product-router");

const cartRouter = require("express").Router(); //on importe la méthode Router 

//CREATE

cartRouter.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.saved();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

 // UPDATE

cartRouter.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, 
            {
            $set : req.body
        },
        {new:true}
        );
        res.status(200).json(updatedCart);
    } catch(err) {
        res.status(500).json(err);
    }
});

//DELETE

cartRouter.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted.")
    }catch(err){
        res.status(500).json(err)
    }
})

// GET BY ID 
cartRouter.get("/find/:id", verifyTokenAndAuthorization, async(req, res) => {
    try{
        const cart = await Cart.find({userId: req.params.userId});
        res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err)
    }
})

// //GET ALL

productRouter.get("/", verifyTokenAndAdmin, async(req, res) => {
    try{
        const carts = await Cart.find()
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err)
    };
})


 module.exports =  cartRouter;