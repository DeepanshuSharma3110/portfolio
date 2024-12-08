import React from "react";
import uploadIcon from "../../assets/upload_area.png";
const AddList = () => {
  return (
    <div className="p-5 w-full ">
      {/* headding */}
      <div className="mb-5">
        <p>Upload Image</p>
      </div>

      {/* image upload section */}
      <div className="flex gap-4 mb-3">
        {[1, 2, 3, 4].map((item) => (
          <label key={item}>
            <input type="file" name={item} className="hidden" />
            <img
              src={uploadIcon}
              className="w-[70px] border border-dashed border-gray-700 rounded "
            />
          </label>
        ))}
      </div>

      {/* product name */}
      <div className="mb-3">
        <p>Product name</p>
        <input type="text" placeholder="Type Here" className="input-primary" />
      </div>

      {/* content area */}
      <div className="mb-3">
        <p>Product description</p>
        <textarea className="input-primary" placeholder="Write content here" />
      </div>

      {/*filter section*/}

      <div className="flex gap-5 mb-3">
        {/* first filter */}
        <div>
          <p>Product category</p>
          <select className="selectBox-primary">
            <option>Men</option>
            <option>Women</option>
            <option>kids</option>
          </select>
        </div>

        <div>
          <p>Sub category</p>
          <select className="selectBox-primary">
            <option>Topwear</option>
            <option>BottomWear</option>
            <option>Winterwear</option>
          </select>
        </div>

        <div>
          <p>Product Price</p>
          <input type="number" placeholder="25" className="p-1" />
        </div>
      </div>


      {/* priduct size filter */}
      <div className="mb-3">
        <p>Product Sizes</p>
        <div className="flex gap-4">
          {['S','M','L','XL','XXL'].map((i)=>(
            <div className={`py-1 px-3 bg-slate-300`}> 
              {i}
              </div>
          ))}
        </div>
      </div>
      {/* add to best seller */}
      <div className="mb-3">
        <input type="checkbox" name="AddToFav" />
        <label>Add to bestseller</label>
      </div>

      {/* sumbit button */}
      <div>
      <button className="button-primary">ADD</button>
      </div>
    </div>
  );
};

export default AddList;
