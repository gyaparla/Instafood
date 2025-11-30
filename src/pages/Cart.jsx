import { useDispatch, useSelector } from "react-redux";
import DishDetails from "../components/DishDetails";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const { items } = cartItems;

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-4 dark:text-amber-50">
        Your Cart
      </h1>
      {items.length > 0 && (
        <div className="text-end mb-8">
          <button
            onClick={handleClearCart}
            className="bg-amber-600 px-4 py-2 rounded-lg cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      )}

      {items.map((item, index) => (
        <DishDetails key={index} itemDetails={item} />
      ))}
    </div>
  );
};

export default Cart;
