import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItems }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart(){
    dispatch(removeFromCart(cartItems.id))
  }

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItems?.image}
            className="h-28 rounded-lg"
            alt={cartItems?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItems?.title}</h1>
            <p className="text-white font-extrabold">{cartItems?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
}
