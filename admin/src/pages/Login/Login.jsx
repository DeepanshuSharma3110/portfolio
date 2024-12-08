import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "admin@ecom.com",
    password: "adminadmin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const { email, password } = credentials;

    if (email === "admin@ecom.com" && password === "adminadmin") {
      toast.success("Login successful");
    } else {
      toast.error("Invalid login");
    }
   
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <ToastContainer />
      <div className="border p-5 rounded grid gap-4 lg:w-1/3 sm:w-1/2 w-full bg-white shadow">
        <h1 className="text-xl font-bold text-center">Admin Login</h1>

        <div className="grid gap-1">
          <label className="text-sm">Email Address</label>
          <input
            type="text"
            name="email"
            className="border rounded py-1 px-3 font-semibold"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm">Password</label>
          <input
            type="password"
            name="password"
            className="border rounded py-1 px-3 font-semibold"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
