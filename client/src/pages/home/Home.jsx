import React, { useEffect } from "react";
import HomePageHero from "../../components/homeHero/HomePageHero";
import HomePageTitle from "../../components/homePageTitle/HomePageTitle";
import Card from "../../components/Card/Card";
import HomePageBestSeller from "../../components/homePageBestSeller/HomePageBestSeller";
import PolicySection from "../../components/policySection/PolicySection";
import Subscribe from "../../components/subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/itemsReducer/itemReducer";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // Select Redux state
  const data = useSelector((store) => store.item.data);
  const isLoading = useSelector((store) => store.item.isLoading);
  const isError = useSelector((store) => store.item.isError);

  // Fetch data on component mount
  useEffect(() => {
    if(data.length===0){
      dispatch(fetchData());
    }
  }, [dispatch]);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="my-9">
        <HomePageHero />
      </div>
      <div className="my-9">
        <HomePageTitle />
      </div>

      {/* Loading State */}
      {isLoading && <p>Loading...</p>}

      {/* Error State */}
      {isError && <p>Error loading data: {isError}</p>}

      {/* Data Display */}
      {!isLoading && !isError && (
        <div className="flex gap-5 flex-wrap justify-center">
          {data.map((item, index) => (
            <Link to={`/product/${item._id}`}>

            <Card data={item} key={index} />
            
            </Link>
          
          ))}
        </div>
      )}

      {/* Additional Sections */}
      <div className="my-9">
        <HomePageBestSeller />
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        {data.slice(0, 3).map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>

      <PolicySection />
      <Subscribe />
    </div>
  );
};

export default Home;
