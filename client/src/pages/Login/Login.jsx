import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userReducer/userReducer";

const Login = () => {
    const [data, setData] = useState({email:'',password:''});
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData ((pre)=>{
            return {...pre, [name]:value}
        })
    }
    const handleValidation = ()=>{
        if(data.email.trim() ==='' ){
            toast.error('field can not be empty');
            return false
        }else if(data.password.trim() ===''){
            toast.error('field can not be empty');
            return false
        }
        return true;
    }
    const handleSubmit = async()=>{
        if(handleValidation()){
            const response = await dispatch(loginUser(data));
            console.log(response);
        }

    }
  return (
    <div className="container h-96 md:my-32 my-1">
      {/* login form */}
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        {/* headding */}

        <div className="flex justify-center items-center gap-2">
          <p className="text-4xl font-semibold">Login</p>{" "}
          <div className="w-9 border-t-2 border-black"></div>
        </div>

        <input
          placeholder="Email" name="email" 

          className="border px-5 py-2 w-96 border-black text-xl"
          onChange={handleChange}
        />

        <input
          placeholder="Password" name="password"

          className="border px-5 py-2 w-96 border-black text-xl"
          onChange={handleChange}
        />

        <div className="flex justify-between items-center gap-9">
          <div>
            <p className="font-semibold">Forgot your password?</p>
          </div>

          <div>
            <Link to="/createNewUser">
              <p className="font-semibold">Create account</p>
            </Link>
          </div>
        </div>
        <button className="btn-primary w-32" onClick={handleSubmit}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
