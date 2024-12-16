import mongoose from "mongoose";

const itemSchema  = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    productCategory: { type: String, required: true },
    subCategory: { type: String, required: true },
    size: [{ type: String, required: true }],
    images: [
        {
          data: Buffer,
          contentType: String,
        },
      ],
      addToBestSeller: { type: Boolean, default: false },
});

const ItemModel = mongoose.model("ItemModel", itemSchema);

export default ItemModel;