import { useParams } from "react-router-dom";
import { useState } from "react";
import { menuDetails } from "../utils/mockData";
import CategoryAccordion from "./CategoryAccordion";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const handleUpdateIndex = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };

  const categories =
    menuDetails?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];

  return (
    <div>
      {categories.map((category, index) => (
        <CategoryAccordion
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          onToggle={() => handleUpdateIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantDetails;
