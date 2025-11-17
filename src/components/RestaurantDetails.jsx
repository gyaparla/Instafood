import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { menuDetails } from "../utils/mockData";
import MenuDetails from "./MenuDetails";
import { useState } from "react";

const RestaurantDetails = () => {
  const { resId } = useParams();
  // const menuDetails = useRestaurantMenu(resId); // Custom hook to fetch menu details through API
  const [showItems, setShowItems] = useState(null);
  const menuList = menuDetails;
  const categories =
    menuList?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const handleItems = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div>
        {categories.map((each, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer w-9/12 m-auto my-2 border-blue-300 border-b"
            >
              {/* Accordion header */}
              <div
                className="flex justify-between items-center p-4"
                onClick={handleItems}
              >
                <p className="font-base text-lg">
                  {each?.card?.card["@type"] ===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                    ? each.card.card.title
                    : ""}
                </p>
                <span>{showItems ? "⬇️" : "⬆️"}</span>
              </div>
              {/* Accordion details */}
              {showItems && (
                <MenuDetails itemDetails={each.card.card.itemCards} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RestaurantDetails;
