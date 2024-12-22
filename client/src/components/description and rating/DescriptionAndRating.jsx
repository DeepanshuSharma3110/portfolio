import React from "react";

const DescriptionAndRating = () => {
  return (
    <div>
      {/* top buttons */}
      <div>
        <button className="w-32 py-2 border ">
          <p className="font-semibold">Description</p>
        </button>
        <button className="w-32 py-2 border ">Reviews(122)</button>
      </div>
      {/* box */}
      <div className="border grid gap-3 p-4">
        <p className="text-sm text-gray-500">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p className="text-sm text-gray-500">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionAndRating;
