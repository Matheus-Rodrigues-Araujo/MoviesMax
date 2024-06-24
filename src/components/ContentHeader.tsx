import { Link } from "react-router-dom";
const ContentHeader = () => {
  return (
    <div className="flex items-end relative">
      <img src="../tlou.jpg" alt="series" className="min-w-full w-auto xl:h-[95vh] object-fill  mx-auto"/>
      <div className="absolute flex gap-4 mx-10 my-10">
        <button className="text-center bg-white py-2 px-3 text-lg font-medium rounded-lg text-black">
          Add to list
        </button>
        <Link
          to="#"
          className="text-center bg-white py-2  px-3 text-lg font-medium rounded-lg text-black"
        >
          More information
        </Link>
      </div>
    </div>
  );
};

export default ContentHeader;
