import { Link } from "react-router-dom";
import { RESTAURANT_THUMBNAIL } from "../utils/constants";

export default function RestaurantCard(props) {
  const { id, name, avgRating, sla, cuisines, locality, cloudinaryImageId } =
    props?.restaurants?.info;
  return (
    <Link to={`restaurants/${id}`}>
      <div key={id} className="card">
        <img
          src={RESTAURANT_THUMBNAIL + cloudinaryImageId}
          alt={`Thumbnail of ${name}`}
        />
        <div className="card-details">
          <h6 className="hotel-name">{name}</h6>
          <p>
            <span className="rating">{avgRating} </span>.
            <span className="duration"> {sla?.slaString}</span>
          </p>
          <p style={{ wordBreak: "break-all", color: "orange" }}>
            {cuisines.join(", ")}
          </p>
          <p style={{ fontWeight: "bold" }}>{locality}</p>
        </div>
      </div>
    </Link>
  );
}
