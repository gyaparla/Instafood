import { Link } from "react-router-dom";
import { RESTAURANT_THUMBNAIL } from "../utils/constants";

export default function RestaurantCard(props) {
  const {
    id,
    name,
    avgRating,
    sla,
    cuisines,
    locality,
    cloudinaryImageId,
    promoted,
  } = props?.restaurants?.info;

  console.log(props?.restaurants?.info);
  return (
    <Link to={`restaurants/menu/${id}`}>
      <div
        key={id}
        className="border border-gray-300 rounded-lg p-2.5 mt-4 w-[330px]"
      >
        <p></p>
        <img
          className="h-[180px] w-full rounded-xl"
          src={RESTAURANT_THUMBNAIL + cloudinaryImageId}
          alt={`Thumbnail of ${name}`}
        />
        <div className="pl-4 pt-3">
          <h4 className="font-bold truncate">{name}</h4>
          <p>
            <span className="rating">
              <small className="text-white bg-green-500 rounded-full h-2 w-2 p-1 mr-1">
                ★
              </small>
              {avgRating}
            </span>
            .<span> {sla?.slaString}</span>
          </p>
          <p className="pt-4 truncate">{cuisines.join(", ")}</p>
          <p>{locality}</p>
        </div>
      </div>
    </Link>
  );
}
