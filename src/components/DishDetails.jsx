import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../redux/slices/cartSlice";
import { RESTAURANT_THUMBNAIL } from "../utils/constants";
import { useLocation } from "react-router-dom";

const DishDetails = (props) => {
  const { itemDetails } = props;

  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <div
        key={itemDetails.card.info.id}
        className="dark:text-amber-50 flex items-center justify-between py-4 px-6 m-auto w-11/12 cursor-default"
      >
        <div>
          <p>
            {itemDetails.card.info.name} | &#8377;
            {itemDetails.card.info.price
              ? itemDetails.card.info.price / 100
              : itemDetails.card.info.defaultPrice / 100}
          </p>
          <p>{itemDetails.card.info.description}</p>
        </div>
        <div className="relative mb-2">
          <img
            className="h-[100px] rounded-lg"
            src={`${RESTAURANT_THUMBNAIL}${itemDetails.card.info.imageId}`}
            alt={`image of ${itemDetails.card.info.name}`}
          />
          {/* Rendering add button based on pathname */}
          {pathname !== "/cart" && (
            <button
              onClick={() => handleAddToCart(itemDetails)}
              className="absolute top-9/12 left-4/12 text-amber-100 bg-black p-2 rounded-lg cursor-pointer"
            >
              Add
            </button>
          )}

          {pathname === "/cart" && (
            <button
              onClick={() => handleRemoveFromCart(itemDetails.card.info.id)}
              className="absolute top-9/12 left-3/12 text-amber-100 bg-black p-2 rounded-lg cursor-pointer"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default DishDetails;
