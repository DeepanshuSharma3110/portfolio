import ItemModel from './itemSchema.js';

export const createNewProduct =async (name,description, price,size, productCategory,subCategory,images)=>{
    try{
        const newItem = new ItemModel({
            name,description, price,size, productCategory,subCategory,images
        });
        const savedItem = await newItem.save();
        return savedItem;
    }catch(err){
        throw err;
    }
}