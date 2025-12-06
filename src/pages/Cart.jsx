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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-6 dark:text-amber-50">
        🛒 Your Cart
      </h1>

      {/* Empty cart message */}
      {items.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-300 mt-12">
          <p className="text-lg">Your cart is empty.</p>
          <p className="text-sm">
            Browse restaurants and add some delicious dishes!
          </p>
        </div>
      )}

      {/* Clear Cart button */}
      {items.length > 0 && (
        <div className="flex justify-end mb-6">
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow transition"
          >
            Clear Cart
          </button>
        </div>
      )}

      {/* Cart items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <DishDetails key={index} itemDetails={item} mode="cart" />
        ))}
      </div>

      {/* Cart summary */}
      {items.length > 0 && (
        <div className="mt-8 border-t pt-6 text-right">
          <p className="text-lg font-semibold dark:text-amber-50">
            Total Items: {items.length}
          </p>
          {/* If you track total price in cartSlice, show it here */}
          {/* <p className="text-lg font-semibold">Total Price: ₹{totalPrice}</p> */}
          <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg shadow transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
