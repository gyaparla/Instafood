import DishDetails from "./DishDetails";

const CategoryAccordion = ({ data, showItems, onToggle }) => {
  if (!data?.title) return null;

  return (
    <div className="w-full sm:w-10/12 mx-auto border-b border-dashed border-blue-300 rounded-lg shadow-sm">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer transition"
        onClick={onToggle}
      >
        <p className="font-bold text-lg dark:text-amber-50">
          {data.title} &nbsp;({data?.itemCards?.length || 0})
        </p>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {/* Accordion Content */}
      {showItems && (
        <div className="divide-y">
          {data.itemCards?.map((item, id) => (
            <DishDetails key={id} itemDetails={item} mode="menu" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;
