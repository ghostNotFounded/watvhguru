import { FaStar, FaList } from "react-icons/fa";

const ActionButtons = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center md:space-x-5 md:space-y-0 space-y-5 items-start">
      <button className="flex items-center md:px-10 md:py-4 px-5 py-2 bg-[#0096c7] space-x-5 ease-out">
        <FaStar /> <span>Rate</span>
      </button>
      <button className="flex items-center md:px-10 md:py-4 px-5 py-2 bg-gray-800/50 space-x-5 hover:bg-gray-800/80 duration-300 ease-out">
        <FaList /> <span>My List</span>
      </button>
    </div>
  );
};

export default ActionButtons;
