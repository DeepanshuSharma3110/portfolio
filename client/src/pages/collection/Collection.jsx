import React from "react";
import Filters from "../../components/filters/Filters";
import Card from "../../components/Card/Card";

const Collection = () => {
  return (
    <div className="grid, md:flex">
      {/* filters section */}
      <Filters />
      {/* all collection */}
      <div>
        {/* sort by */}
        <div className="flex justify-between items-center my-8 mx-6">
          <div className="flex gap-2 justify-center items-center">
            <label for="order" className="text-2xl">ALL COLLECTIONS</label>
            <div className="border-t-2 w-16 border-black"></div>
          </div>
          <div>
            <select name="order" id="order" className="border px-2 py-4 border-2">
              <option value="accending">Sort By:Low To High</option>
              <option value="decending">Sort By:High To Low</option>
            </select>
          </div>
        </div>

        {/* render cards with filters */}
        <div className="flex gap-3 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </div>
    </div>
  );
};

export default Collection;
