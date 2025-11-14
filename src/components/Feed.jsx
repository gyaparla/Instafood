import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react";
import { RESTAURANTS_LIST_API } from "../utils/constants";

function Feed() {
  const [data, setData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function fetchData() {
    try {
      const res = await fetch(RESTAURANTS_LIST_API);
      const json = await res.json();
      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setData(restaurants);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue === "") setFilteredRestaurants(data);
    const handler = setTimeout(() => {
      const filteredData = data.filter((each) =>
        each.info.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredRestaurants(filteredData);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchValue, data]);

  return (
    <>
      <div className="">
        <div className="flex gap-20 py-6">
          <div>
            <input
              className="outline-0 border-2 border-amber-500 rounded-md py-0.5 pl-1"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-amber-500 px-6 py-1 rounded-md text-white cursor-pointer"
            onClick={() =>
              setFilteredRestaurants(
                data.filter((res) => res.info.avgRating > 4)
              )
            }
          >
            Top Rated
          </button>
        </div>

        <div className="flex flex-wrap justify-between">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurants={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Feed;
