import { Activity } from "react";
import { RESTAURANT_THUMBNAIL } from "../utils/constants";

const MenuDetails = (itemDetails, accordionNumber) => {
  return (
    <div>
      {itemDetails.map((data) => {
        return (
          <div
            key={data.card.info.id}
            className="flex items-center justify-between py-4 px-4 m-auto w-11/12"
          >
            <div>
              <p>
                {data.card.info.name} | &#8377;
                {data.card.info.price
                  ? data.card.info.price / 100
                  : data.card.info.defaultPrice / 100}
              </p>
              <p>{data.card.info.description}</p>
            </div>
            <div>
              <img
                className="h-[100px] rounded-lg"
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

const CategoryAccordion = (props) => {
  const { data, show, handleOpen, accordionNumber } = props;
  return (
    <div className=" cursor-pointer w-9/12 m-auto my-2 border-blue-300 border-dashed border-b">
      {/* Accordion header */}
      <div
        className="flex justify-between items-center p-4"
        onClick={() => handleOpen(!show, accordionNumber)}
      >
        <p className="font-base text-lg">
          {data?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            ? data.card.card.title
            : ""}
        </p>
        <span>⬇️ ⬆️</span>
      </div>
      {/* Accordion details */}
      <Activity mode={show ? "visible" : "hidden"}>
        {MenuDetails(data.card.card.itemCards, accordionNumber)}
      </Activity>
    </div>
  );
};

export default CategoryAccordion;
