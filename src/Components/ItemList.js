import { useDispatch } from "react-redux";
import { ITEM_IMAGE_URL } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 text-left bg-gray-100 border-b-2 flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - ₹{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.finalPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute flex justify-center ml-7 mt-12">
              <button
                className="bg-green-200 text-center text-xs p-1 rounded-md shadow-sm"
                onClick={() => handleAddToCart(item)}
              >
                Add
              </button>
            </div>
            <img
              src={ITEM_IMAGE_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="rounded-md w-[83.4px] h-[63.65px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
