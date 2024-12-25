import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const RelatedProduct = ({ productCategory, subCategory,productId }) => {
  const data = useSelector((store) => store.item.data);
  const [relatedProduct, setRelatedProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    
    if (data && productCategory && subCategory) {
      const filterProducts = data.filter((item) => {
      return  item.productCategory === productCategory && item._id !== productId && item.subCategory === subCategory;
      });

      setRelatedProducts(filterProducts.slice(0, 5));
    
    }
    console.log(relatedProduct);
    
  }, [data, productCategory, subCategory,id]);
  return (
    <div>
      {/* headding */}
      <div className="flex justify-center items-center">
        <p className="text-gray-500 text-3xl font-semibold">RELATED&nbsp;</p>
        <p className="text-3xl font-semibold">PRODUCTS</p>
        <div className="border-t-4 border-black w-20"></div>
      </div>
      {/* products */}
      <div className="flex my-10 gap-5 justify-center items-center">
        {relatedProduct.map((item) => (
          <Link to={`/product/${item._id}`}>
      <div className="w-48">

          <Card key={item._id} data={item} />
      </div>
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default RelatedProduct;
