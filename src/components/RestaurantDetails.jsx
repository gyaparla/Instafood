import { useEffect } from "react";

const RestaurantDetails = () => {
  const fetchRestaurantDetails = async () => {
    try {
      let details = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=776566&catalog_qa=undefined&submitAction=ENTER"
      );
      let data = await details.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  return <>Details of Each Restaurant -- </>;
};
export default RestaurantDetails;
