import React from "react";
import p_img2 from "../../frontend_assets/p_img2.png";
import DescriptionAndRating from "../../components/description and rating/DescriptionAndRating";
import RelatedProduct from "../../components/relatedProduct/RelatedProduct";
const Product = () => {
  return (
    <div>
      <div className="my-5">
        <div className="border w-full container border-gray-300 border-b-2"></div>
      </div>



      {/* top section */}
      <div className="container flex gap-5">
        {/* all the images */}
        <div className="flex gap-4 flex-col">
          {[1, 2, 3, 4].map((i) => (
            <img src={p_img2} className="w-28 " />
          ))}
        </div>

        {/* display image */}
        <div>
          <img src={p_img2} />
        </div>

        {/* product details section */}
        <div className="grid gap-10">
          <p className="text-2xl font-semibold">
            Men Round Neck Pure Cotton T-shirt
          </p>
          <div>rating</div>
          <p className="font-bold text-2xl">$80</p>
          <p className="text-xl">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </p>

          <div>
            <p className="mb-5 text-xl">Select Size</p>
            <div className="flex gap-4">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div className=" p-5  bg-gray-300 text-xl font-semibold">{size}</div>
              ))}
            </div>
          </div>

          <button className="btn-primary w-40">ADD TO CART</button>
          <div className="border border-gray-400 w-full"></div>

          <div>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>





      {/* description and reviews */}
      <div className="container my-20">
        <DescriptionAndRating />
      </div>

      {/* relatable product */}
      <div className="container my-20">
              <RelatedProduct />
              
      </div>


    </div>
  );
};

export default Product;
