import React, { useEffect, useState, useMemo } from "react";
import DescriptionAndRating from "../../components/description and rating/DescriptionAndRating";
import RelatedProduct from "../../components/relatedProduct/RelatedProduct";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/itemsReducer/itemReducer";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector((store) => store.item.data);
  const isLoading = useSelector((store) => store.item.isLoading);
  const [openedProduct, setOpenedProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImageCount, setSelectedImageCount] = useState(0);

  // Utility to convert Uint8Array to Base64
  const arrayBufferToBase64 = (buffer) => {
    const uint8Array = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < uint8Array.length; i++) {
      binary += String.fromCharCode(uint8Array[i]);
    }

    return btoa(binary);
  };

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    } else {
      const currentProduct = data.find((item) => item._id === id);
      setOpenedProduct(currentProduct);
    }
  }, [dispatch, data, id]);

  const processedImages = useMemo(() => {
    if (openedProduct?.images) {
      return openedProduct.images.map((img) => ({
        contentType: img.contentType,
        data: arrayBufferToBase64(img.data.data),
      }));
    }
    return [];
  }, [openedProduct]);

  useEffect(() => {
    setImages(processedImages);
  }, [processedImages]);

  if (isLoading) {
    return (
      <div className="w-full">
        <p className="container text-3xl font-semibold py-32">Loading...</p>
      </div>
    );
  }

  if (!openedProduct) {
    return (
      <div className="w-full">
        <p className="container text-3xl font-semibold py-32">
          Product not found.
        </p>
      </div>
    );
  }

  const primaryImage =
    images.length > 0
      ? `data:${images[selectedImageCount].contentType};base64,${images[selectedImageCount].data}`
      : "";

  console.log(openedProduct);

  return (
    <div>
      <div className="my-5">
        <div className="border w-full container border-gray-300 border-b-2"></div>
      </div>

      {/* Top Section */}
      <div className="container grid md:flex gap-5">
        {/* All Images */}
        <div className="flex gap-4 md:flex-col justify-center items-center order-2 md:justify-start md:order-none">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={`data:${img.contentType};base64,${img.data}`}
                alt={`Product thumbnail ${index + 1}`}
                className="w-32"
                onClick={() => setSelectedImageCount(index)}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>

        {/* Display Image */}
        <div className="order-1 md:order-none">
          <img src={primaryImage} alt="Product" className="w-full" />
        </div>

        {/* Product Details Section */}
        <div className="grid gap-10 order-3 md:order-none">
          <p className="text-2xl font-semibold">{openedProduct.name}</p>
          <div>Rating: {openedProduct.rating || "N/A"}</div>
          <p className="font-bold text-2xl">${openedProduct.price}</p>
          <p className="text-xl">{openedProduct.description}</p>

          <div>
            <p className="mb-5 text-xl">Select Size</p>
            <div className="flex gap-4">
              {openedProduct.size.map((size) => (
                <div
                  key={size}
                  className="p-5 bg-gray-300 text-xl font-semibold"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button className="btn-primary w-40">ADD TO CART</button>
          <div className="border-t-2 border-gray-400 w-full"></div>

          <div>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="container my-20">
        <DescriptionAndRating />
      </div>

      {/* Related Products */}
      <div className="container my-20">
        <RelatedProduct
          productCategory={openedProduct.productCategory}
          productId = {openedProduct._id}
          subCategory={openedProduct.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
