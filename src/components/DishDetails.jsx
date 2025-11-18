import { RESTAURANT_THUMBNAIL } from "../utils/constants";

const DishDetails = (props) => {
  const { itemDetails } = props;
  return (
    <div>
      {itemDetails?.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between py-4 px-6 m-auto w-11/12 cursor-default"
        >
          <div>
            <p>
              {item.card.info.name} | &#8377;
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p>{item.card.info.description}</p>
          </div>
          <div>
            <img
              className="h-[100px] rounded-lg"
              src={`${RESTAURANT_THUMBNAIL}${item.card.info.imageId}`}
              alt={`image of ${item.card.info.name}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default DishDetails;
