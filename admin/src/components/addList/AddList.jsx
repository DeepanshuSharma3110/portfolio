import React, { useState } from "react";
import uploadIcon from "../../assets/upload_area.png";
import axios from "axios";
import { AddItem } from "../../adminUrl";

const AddList = () => {
  const [input, setInput] = useState({
    images: [],
    name: "",
    description: "",
    productCategory: "",
    subCategory: "",
    price: "",
    size: [],
    addToBestSeller: false,
  });
  console.log(input);

const sendToServer =async (formData)=>{
  try {
    const response = await axios.post(AddItem, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    
    console.log("Response from server:", response.data);
  } catch (err) {
    console.error("Error sending data to server:", err);
  }
}


  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      setInput((prev) => {
        const updatedImages = [...prev.images];
        updatedImages[index] = file;
        return { ...prev, images: updatedImages };
      });
    }
  };

  const handleSubmit = () => {
    if (
      !input.name ||
      !input.description ||
      !input.price ||
      input.images.length == 0 ||
      input.size.length == 0 ||
      !input.productCategory ||
      !input.subCategory
    ) {
      alert("Please fill in all required fields!");

      return;
    } 
    const formData = new FormData();
    formData.append("name",input.name)
    formData.append("description", input.description);
    formData.append("price", input.price);
    input.images.forEach((image, index) => {
      if (image) formData.append(`image${index}`, image);
    });
    input.size.forEach((size)=>formData.append("size[]",size))
    formData.append("productCategory", input.productCategory);
    formData.append("subCategory", input.subCategory);

    sendToServer(formData);
    
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !input.addToBestSeller : value,
    }));
  };

  return (
    <div className="p-5 ">
      {/* headding */}
      <div className="mb-5">
        <p>Upload Image</p>
      </div>

      {/* image upload section */}
      <div className="flex gap-4 mb-3">
        {[0, 1, 2, 3].map((index) => (
          <label key={index}>
            <input
              type="file"
              name={`image${index}`}
              className="hidden"
              onChange={(e) => handleImageUpload(e, index)}
            />
            <img
              src={
                input.images[index]
                  ? URL.createObjectURL(input.images[index])
                  : uploadIcon
              }
              className="w-[70px] border border-dashed border-gray-700 rounded "
            />
          </label>
        ))}
      </div>

      {/* product name */}
      <div className="mb-3">
        <p>Product name</p>
        <input
          type="text"
          name="name"
          placeholder="Type Here"
          className="input-primary w-full"
          onChange={handleChange}
        />
      </div>

      {/* content area */}
      <div className="mb-3">
        <p>Product description</p>
        <textarea
          className="input-primary"
          name="description"
          placeholder="Write content here w-full"
          onChange={handleChange}
        />
      </div>

      {/*filter section*/}

      <div className=" md:flex gap-5 mb-3 ">
        {/* first filter */}
        <div className="mb-3 sm:mb-0">
          <p>Product category</p>
          <select
            name="productCategory"
            onChange={handleChange}
            className="selectBox-primary"
            value={input.productCategory}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">kids</option>
          </select>
        </div>

        <div className="mb-3 sm:mb-0">
          <p>Sub category</p>
          <select
            name="subCategory"
            onChange={handleChange}
            className="selectBox-primary"
            value={input.subCategory}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Topwear">Topwear</option>
            <option value="BottomWear">BottomWear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="mb-3 sm:mb-0">
          <p>Product Price</p>
          <input
            type="number"
            name="price"
            placeholder="25"
            onChange={handleChange}
            className="p-1 outline-none focus:border-pink-400 border"
          />
        </div>
      </div>

      {/* priduct size filter */}
      <div className="mb-3">
        <p>Product Sizes</p>
        <div className="flex gap-4">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              className={`py-1 px-3 rounded ${
                input.size.includes(size) ? "bg-pink-300" : "bg-slate-300"
              }`}
              onClick={() =>
                setInput((prev) => ({
                  ...prev,
                  size: prev.size.includes(size)
                    ? prev.size.filter((s) => s !== size)
                    : [...prev.size, size],
                }))
              }
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      {/* add to best seller */}
      <div className="mb-3">
        <input type="checkbox" name="addToBestSeller" onChange={handleChange} />
        <label>Add to bestseller</label>
      </div>

      {/* sumbit button */}
      <div>
        <button className="button-primary" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddList;
