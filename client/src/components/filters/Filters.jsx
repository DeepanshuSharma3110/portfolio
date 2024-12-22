import React, { useState } from "react";
import dropdownIcon from "../../frontend_assets/dropdown_icon.png";

const Filters = ({ filters, setFilters ,subFilters, setSubFilters }) => {
  const [displayFilter, setDisplayFilter] = useState([]);

  const handleAddFilter = (e) => {
    const { name } = e.target;
    // Check if the filter is already in the array
    if (filters.includes(name)) {
      setFilters(filters.filter((filter) => filter !== name));
    } else {
      // Add the filter to the array
      setFilters([...filters, name]);
    }
  };

  const handleAddSubFilter = (e) => {
    const { name } = e.target;

    // Check if the filter is already in the array
    if (subFilters.includes(name)) {
      setSubFilters(subFilters.filter((filter) => filter !== name));
    } else {
      // Add the filter to the array
      setSubFilters([...subFilters, name]);
    }
  };

  return (
    <div>
      {/* Heading with buttons */}
      <div className="flex gap-3 items-center">
        <p className="text-3xl font-semibold">FILTERS</p>
        <img
          src={dropdownIcon}
          className={`w-4 h-5 md:hidden ${displayFilter ? "rotate-90" : ""}`}
          onClick={() => setDisplayFilter(!displayFilter)}
        />
      </div>

      <div className={`${displayFilter ? "block" : "hidden"} md:block m-5`}>
        {/* Categories Section */}
        <div className="border rounded border-2 px-3 py-2 grid gap-2 mb-3">
          <p className="text-2xl font-semibold">CATEGORIES</p>
          <div>
            <input
              type="checkbox"
              id="Men"
              name="Men"
              value="Men"
              checked={filters.includes("Men")}
              onChange={handleAddFilter}
            />
            <label htmlFor="Men" className="text-xl">
            &nbsp; Men
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Women"
              name="Women"
              value="Women"
              checked={filters.includes("Women")}
              onChange={handleAddFilter}
            />
            <label htmlFor="Women" className="text-xl">
            &nbsp; Women
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Kids"
              name="Kids"
              value="Kids"
              checked={filters.includes("Kids")}
              onChange={handleAddFilter}
            />
            <label htmlFor="Kids" className="text-xl">
            &nbsp; Kids
            </label>
          </div>
        </div>

        {/* Type Section */}
        <div className="border rounded border-2 px-3 py-2 grid gap-2">
          <p className="text-2xl font-semibold">TYPE</p>
          <div>
            <input
              type="checkbox"
              id="Topwear"
              name="Topwear"
              value="Topwear"
              checked={subFilters.includes("Topwear")}
              onChange={handleAddSubFilter}
            />
            <label htmlFor="Topwear" className="text-xl">
            &nbsp; Topwear
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="BottomWear"
              name="BottomWear"
              value="BottomWear"
              checked={subFilters.includes("BottomWear")}
              onChange={handleAddSubFilter}
            />
            <label htmlFor="Bottomwear" className="text-xl">
            &nbsp; Bottomwear
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Winterwear"
              name="Winterwear"
              value="Winterwear"
              checked={subFilters.includes("Winterwear")}
              onChange={handleAddSubFilter}
            />
            <label htmlFor="Winterwear" className="text-xl">
            &nbsp; Winterwear
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
