import React, { useState, useEffect, useMemo } from "react";
import Filters from "../../components/filters/Filters";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/itemsReducer/itemReducer";
import {Link} from 'react-router-dom'

const Collection = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState([]);
  const [subFilters, setSubFilters] = useState([]);
  const data = useSelector((store) => store.item.data);
  const isLoading = useSelector((store) => store.item.isLoading);
  const isError = useSelector((store) => store.item.isError);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, data]);

 
  const dataAfterFilter = useMemo(() => {
    let filteredData = data;

    // Apply filters
    if (filters.length > 0) {
      filteredData = filteredData.filter((item) =>
        filters.includes(item.productCategory)
      );
    }

    // Apply subFilters
    if (subFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        subFilters.includes(item.subCategory)
      );
    }

    let sortedData = [...filteredData];

    // Sort the filtered data based on the selected order
    if (sortOrder === "ascending") {
      sortedData = sortedData.sort((a, b) => a.price - b.price);
    } else {
      sortedData = sortedData.sort((a, b) => b.price - a.price);
    }
    console.log(sortedData);
    
    return sortedData;
  }, [data, filters, subFilters, sortOrder]);





  return (
    <div className="grid md:flex">
      {/* Filters Section */}
      <Filters
        setFilters={setFilters}
        filters={filters}
        subFilters={subFilters}
        setSubFilters={setSubFilters}
      />

      {/* All Collection */}
      
      <div>
        {/* Sort By Section */}
        <div className="flex justify-between items-center my-8 mx-6 container">
          <div className="flex gap-2 justify-center items-center">
            <label htmlFor="order" className="text-2xl">
              ALL COLLECTIONS
            </label>
            <div className="border-t-2 w-16 border-black"></div>
          </div>
          <div>
            <select
              name="order"
              id="order"
              className="border px-2 py-4 border-2"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="ascending">Sort By: Low To High</option>
              <option value="descending">Sort By: High To Low</option>
            </select>
          </div>
        </div>


        {/* Loading State */}
        {isLoading && <p>Loading...</p>}


        {/* Error State */}
        {isError && <p>Error loading data: {isError}</p>}


        {/* Render Cards with Filters */}
        <div className="my-12">

        <div className="flex flex-wrap gap-5 justify-center items-center">
          {dataAfterFilter.length > 0 ? (
            dataAfterFilter.map((item) => 
            <Link to={`/product/${item._id}`}> 
             <Card key={item._id} data={item}/>
             </Link>
             )
          ) : (
            <p>No items found for the selected filters</p>
          )}
        </div>

         </div>

      </div>
    </div>
  );
};

export default Collection;
