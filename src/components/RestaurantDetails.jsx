import { useLocation } from "react-router-dom";
import { useState } from "react";
import { menuDetails } from "../utils/mockData";
import CategoryAccordion from "./CategoryAccordion";

const RestaurantDetails = () => {
  const location = useLocation();
  const { restaurantDetails, locality, avgRating, costForTwo, deliveryTime } =
    location.state || {};

  const [showIndex, setShowIndex] = useState(0);

  const handleUpdateIndex = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };

  const categories =
    menuDetails?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="text-center sm:text-left mb-6">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          <span className="text-amber-600">
            {restaurantDetails || "Unknown Restaurant"}
          </span>
          &nbsp;|&nbsp;
          <span className="text-amber-600">
            📍{locality || "Unknown Location"}
          </span>
        </h1>
        <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-4 text-gray-700 dark:text-gray-300">
          {avgRating && <span>⭐ {avgRating}</span>}
          {costForTwo && <span>💰 {costForTwo}</span>}
          {deliveryTime && <span>⏱ {deliveryTime}</span>}
        </div>
      </div>

      {/* Categories Accordion */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <CategoryAccordion
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex}
            onToggle={() => handleUpdateIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
