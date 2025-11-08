import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react";

function Feed() {
  const [data, setData] = useState(restaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function fetchData() {
    fetch(
      "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurants"
    )
      .then((data) => data.json().then((res) => console.log(res)))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
    if (searchValue === "") setFilteredRestaurants(data);
    const handler = setTimeout(() => {
      const filteredData = data.filter((each) =>
        each.info.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredRestaurants(filteredData);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchValue]);

  return (
    <>
      <div className="feed-container">
        <div className="filters-container">
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <button
            className="filter-btn"
            onClick={() =>
              setFilteredRestaurants(
                data.filter((res) => res.info.avgRating > 4)
              )
            }
          >
            Top Rated
          </button>
        </div>

        <div className="card-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurants={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Feed;
