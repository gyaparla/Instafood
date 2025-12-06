import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESTAURANTS_LIST_API, USE_MOCK } from "../utils/constants";
import CardShimmer from "../shimmer/CardShimmer";
import { restaurants } from "../utils/mockData";

function Feed() {
  const [data, setData] = useState(
    restaurants.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch(RESTAURANTS_LIST_API);
      const json = await res.json();
      const restaurants =
        json.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setData(restaurants);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!USE_MOCK) {
      fetchData();
    }
  }, []);

  return (
    <>
      <div className="">
        <div className="py-6 text-center sm:text-left">
          <input
            className="outline-0 border-2 border-amber-500 rounded-md py-0.5 pl-1 dark:text-amber-50"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <CardShimmer key={i} />)
            : data
                .filter((each) =>
                  each.info.name
                    .toLowerCase()
                    .includes(searchValue.trim().toLowerCase())
                )
                .map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.info.id}
                    cardDetails={restaurant.info}
                  />
                ))}
        </div>
      </div>
    </>
  );
}
export default Feed;
