import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-20">
      <p className="text-4xl font-semibold">Subscribe now & get 20% off</p>
      <p className="text-2xl text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border border-2 rounded px-7 py-4 w-96 outline-none font-semibold"
        />
        <button className="bg-black text-white px-7 py-4">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Subscribe;
