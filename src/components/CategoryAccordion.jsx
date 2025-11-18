import { useState } from "react";
import DishDetails from "./DishDetails";

const CategoryAccordion = ({ data, showItems, onToggle }) => {
  return (
    <div className="w-9/12 m-auto my-2 border-blue-300 border-dashed border-b">
      {/* Accordion title */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={onToggle}
      >
        <p className="font-bold text-lg">
          {data.title}&nbsp;({data?.itemCards?.length})
        </p>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {/* Accordion details */}
      {showItems && <DishDetails itemDetails={data.itemCards} />}
    </div>
  );
};

export default CategoryAccordion;
