import { createNewProduct } from "../repository/itemRepository.js";
export const addItem = async(req,res,next)=>{
    try{

        const {name,description, price,size, productCategory,subCategory } = req.body;
        const images = req.files.map((file) => ({
            data: file.buffer,
            contentType: file.mimetype,
          }));

        
          console.log(images);
          
       // add item
        const result = await createNewProduct(name,description, price,size, productCategory,subCategory,images)
        if(result){        
            return res.status(201).json({message:'Item Created Sucessfully', status:'sucessfull'});
  }z

    }catch(err){
        console.log(err);
    }
}

