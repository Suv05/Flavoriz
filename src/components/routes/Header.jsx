import { NavLink, Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";

function Header() {
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-5 py-5">
        <Link to="/" className="hover:scale-110 active:scale-75">
          <h1 className="font-noto-sans font-bold text-xl">
            FLA<span className="text-orange">VORIZ</span>
          </h1>
        </Link>

        <nav className="flex-1 text-center font-noto-sans">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "me-5 font-semibold text-sm touch-pan-up underline decoration-orange"
                : "me-5 font-normal text-xs hover:text-sm hover:font-medium"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "me-5 font-semibold text-sm touch-pan-up underline decoration-orange"
                : "me-5 font-normal text-xs hover:text-sm hover:font-medium"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "me-5 font-semibold text-sm touch-pan-up underline decoration-orange"
                : "me-5 font-normal text-xs hover:text-sm hover:font-medium"
            }
          >
            RECIPES
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-sm touch-pan-up underline decoration-orange"
                : "font-normal text-xs hover:text-sm hover:font-medium"
            }
          >
            CONTACT
          </NavLink>
        </nav>

        <NavLink
          to="/fav"
          className={({ isActive }) =>
            isActive
              ? "text-orange"
              : "hover:scale-105 active:scale-75"
          }
        >
          <div className="ml-auto">
            <GrFavorite size={27}/>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
