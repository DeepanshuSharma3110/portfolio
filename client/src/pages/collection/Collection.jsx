import React from "react";
import Filters from "../../components/filters/Filters";
import Card from "../../components/Card/Card";

const Collection = () => {
  return (
    <div>
      {/* filters section */}
      <Filters />
      {/* all collection */}
      <div>
        {/* sort by */}
        <div>
          <div>
            <label for="order">ALL COLLECTIONS</label>
            <div></div>
          </div>
          <div>
            <select name="order" id="order">
              <option value="accending">Sort By:Low To High</option>
              <option value="decending">Sort By:High To Low</option>
            </select>
          </div>
        </div>

        {/* render cards with filters */}
        <Card />
      </div>
    </div>
  );
};

export default Collection;
