import { RESTAURANT_THUMBNAIL } from "../utils/constants";

const MenuDetails = ({ itemDetails }) => {
  return (
    <div>
      {itemDetails.map((data) => {
        return (
          <div key={data.card.info.id} className="flex items-center justify-between py-3 mt-2 px-4">
            <div className="w-9/12">
              <p>{data.card.info.name} | &#8377; {data.card.info.price ? data.card.info.price/100 : data.card.info.defaultPrice/100}</p>
              <p>{data.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <img
              className="w-9/12 h-[100px] rounded-lg"
                src={`${RESTAURANT_THUMBNAIL}${data.card.info.imageId}`}
                alt={`image of ${data.card.info.name}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuDetails;
