import userModel from "./userSchema.js";

export const addUser =async  (name, email, password)=>{
    try{

        const result  = new userModel({
            name, email, password
        });
        const saveUser = await result.save();
        return saveUser;
    }catch(err){
        throw err;
    }
}

export const verifyUserName = async (email)=>{
    try{

        const result = await userModel.findOne({email});
        if(!result){
            return null;
        
        }

        return result;
    
}catch(err){
        throw err
    }
}