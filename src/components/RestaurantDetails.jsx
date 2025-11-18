import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { menuDetails } from "../utils/mockData";
import MenuDetails from "./CategoryAccordion";
import { Activity, useState } from "react";
import CategoryAccordion from "./CategoryAccordion";

const RestaurantDetails = () => {
  const { resId } = useParams();
  // const menuDetails = useRestaurantMenu(resId); // Custom hook to fetch menu details through API
  const [showItems, setShowItems] = useState(null);
  const [accordionIndex, setAccordionIndex] = useState(0)
  const menuList = menuDetails;
  const categories =
    menuList?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const handleOpen = (value, number) => {
    setShowItems(value)
    setAccordionIndex(number)
    // console.log("accordionNumber ==>", number)
  };
  return (
    <>
      <div>
        {categories.map((each, index) => {
          return (
            <CategoryAccordion key={index} data={each} show={showItems} handleOpen={handleOpen} accordionNumber={index}/>
          );
        })}
      </div>
    </>
  );
};
export default RestaurantDetails;
