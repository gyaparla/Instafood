import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [menuDetails, setMenuDetails] = useState("Menu details");

  const fetchMenuDetails = async () => {
    const menu = await fetch(RESTAURANT_MENU_API + restaurantId);
    const json = menu.json();
    console.log("json ==>", json);
    const result = json;
    console.log("result ==>", result);
  };
  //   useEffect(() => {
  //     fetchMenuDetails();
  //   }, []);

  return menuDetails;
};

export default useRestaurantMenu;
