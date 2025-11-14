import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [menuDetails, setMenuDetails] = useState("Menu details");

  const fetchMenuDetails = async () => {
    const menu = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=" +
        restaurantId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
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
