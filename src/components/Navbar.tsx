import { navigationLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <header>
      <nav className="flex items-center justify-between w-full bg-gray-950 h-16 px-4 md:px-10">
        <div className="flex items-center gap-4">
          <Link to="/explore" className="text-white font-bold text-2xl mb-1">
            M★viesMax
          </Link>
          {navigationLinks.map((item) => {
            const isActive = pathname === item.route;

            return (
              <Link
                to={item.route}
                key={item.label}
                className={`${
                  isActive
                    ? "text-white bg-blue-2 px-1 rounded-md"
                    : "text-white hover:text-blue-400 px-1"
                } text-md font-medium hidden md:inline`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4 ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="MagnifyingGlassStandard"
              aria-hidden="true"
              className="search-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <div className="flex justify-center items-center font-medium text-xl rounded-md h-7 w-7 bg-white">
            M
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
