import mongoose from "mongoose"


const cartSchema = mongoose.Schema({
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users",
    required : true
  },
  productId :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "products",
      required : true
  },
  quantity :{
    type : Number,
    required : true,
    default : 1
  },
  product : {
    type : mongoose.Schema.Types.Mixed,
    required : true
  }
})


const cartModel = mongoose.Model("cart",cartSchema);
