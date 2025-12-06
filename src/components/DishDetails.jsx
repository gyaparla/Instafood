import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../redux/slices/cartSlice";
import { RESTAURANT_THUMBNAIL } from "../utils/constants";

const DishDetails = ({ itemDetails, mode = "menu" }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const { id, name, description, price, defaultPrice, imageId } =
    itemDetails.card.info;
  const displayPrice = price ? price / 100 : defaultPrice / 100;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 w-full sm:w-11/12 mx-auto dark:text-amber-50 border-b">
      <div className="flex-1">
        <p className="font-semibold text-lg">
          {name} | ₹{displayPrice}
        </p>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>

      <div className="relative mt-3 sm:mt-0">
        <img
          className="h-[100px] w-[120px] object-cover rounded-lg shadow"
          src={`${RESTAURANT_THUMBNAIL}${imageId}`}
          alt={`image of ${name}`}
        />
        {mode === "menu" && (
          <button
            onClick={() => handleAddToCart(itemDetails)}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-3 py-1 rounded shadow hover:bg-amber-600 transition cursor-pointer"
          >
            Add
          </button>
        )}
        {mode === "cart" && (
          <button
            onClick={() => handleRemoveFromCart(id)}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition cursor-pointer"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default DishDetails;
