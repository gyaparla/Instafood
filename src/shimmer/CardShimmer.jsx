const CardShimmer = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-lg p-2.5 mt-4 w-[330px]">
        <div className="h-[170px] w-full bg-gray-200 rounded-lg  animate-pulse"></div>
        <div className="pl-2 pt-3  animate-pulse">
          <h4 className="bg-gray-200 h-3 w-10/12 rounded-lg"></h4>
          <p className="bg-gray-200 h-3 w-9/12 rounded-lg mt-1.5"></p>
          <p className="bg-gray-200 h-3 w-8/12 rounded-lg mt-1.5"></p>
          <p className="bg-gray-200 h-3 w-5/12 rounded-lg mt-1.5"></p>
        </div>
      </div>
    </div>
  );
};
export default CardShimmer;
