import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {
  const { resId } = useParams();
  console.log(resId);

  const menuDetails = useRestaurantMenu(resId);
  console.log(menuDetails);
  return <>Details of Each Restaurant -- </>;
};
export default RestaurantDetails;
