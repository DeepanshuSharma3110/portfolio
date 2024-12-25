import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/userReducer/userReducer";

const SignUp = () => {
    const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleValidation = () => {
    if (data.name.trim() == "") {
        toast.error('Wow so easy !');
      return false;
    } else if (data.email.trim() == "") {
      toast.error("something went wrong");
      return false;
    } else if (data.password.trim() == "") {
      toast.error("something went wrong");
      return false;
    }else{
        toast.success('login sucessfull')
        return true;
    }
  };

  const handleSubmit =async () => {
    if (handleValidation()) {
        const response = await dispatch(registerUser(data));
        console.log(response);
        
    }
  };

  return (
    <div className="container h-96 md:my-32 my-1">
      {/* login form */}
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        {/* headding */}

        <div className="flex justify-center items-center gap-2">
          <p className="text-4xl font-semibold">Sign Up</p>{" "}
          <div className="w-9 border-t-2 border-black"></div>
        </div>

        <div></div>

        <input
          type="text"
          placeholder="Name"
          className="border px-5 py-2 w-96 border-black text-xl"
          name="name"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          className="border px-5 py-2 w-96 border-black text-xl"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border px-5 py-2 w-96 border-black text-xl"
          name="password"
          onChange={handleChange}
        />

        <div className="flex justify-between items-center gap-9">
          <div>
            <Link to="/login">
              <p className="font-semibold">Login</p>
            </Link>
          </div>
        </div>
        <div></div>
        <button className="btn-primary w-32" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
