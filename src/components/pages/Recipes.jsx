import { NavLink, Outlet } from "react-router-dom";
import veg from "../../assets/veg.svg";
import chinese from "../../assets/china.svg";
import cock from "../../assets/cock.svg";
import mexi from "../../assets/mexi.svg";
import { CiSearch } from "react-icons/ci";

function Recipes() {
  return (
    <>
      <center className="font-noto-sans text-2xl font-bold mt-2 mb-8">
        What to{" "}
        <span className="text-orange underline underline-orange">Cook</span> ?
      </center>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 font-noto-sans text-orange px-7 mb-4">
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "flex items-center mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  bg-zinc-950 text-white"
              : "flex items-center bg-zinc-200 mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  hover:bg-zinc-950 hover:text-white"
          }
          end
        >
          <img
            src={chinese}
            alt="Chinese Icon"
            className="h-6 w-7 rounded-full bg-orange p-1 mr-2"
          />
          CHINESE
        </NavLink>
        <NavLink
          to="mexican"
          className={({ isActive }) =>
            isActive
              ? "flex items-center mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  bg-zinc-950 text-white"
              : "flex items-center bg-zinc-200 mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  hover:bg-zinc-950 hover:text-white"
          }
        >
          <img
            src={mexi}
            alt="Mexican Icon"
            className="h-6 w-7 rounded-full bg-orange p-1 mr-2"
          />
          MEXICAN
        </NavLink>
        <NavLink
          to="cocktail"
          className={({ isActive }) =>
            isActive
              ? "flex items-center mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  bg-zinc-950 text-white"
              : "flex items-center bg-zinc-200 mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  hover:bg-zinc-950 hover:text-white"
          }
        >
          <img
            src={cock}
            alt="Cocktail Icon"
            className="h-6 w-7 rounded-full bg-orange p-1 mr-2"
          />
          COCKTAIL
        </NavLink>
        <NavLink
          to="vegan"
          className={({ isActive }) =>
            isActive
              ? "flex items-center mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  bg-zinc-950 text-white"
              : "flex items-center bg-zinc-200 mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  hover:bg-zinc-950 hover:text-white"
          }
        >
          <img
            src={veg}
            alt="Vegan Icon"
            className="h-6 w-7 rounded-full bg-orange p-1 mr-2"
          />
          VEGAN
        </NavLink>
        <NavLink
          to="tryitout"
          className={({ isActive }) =>
            isActive
              ? "flex items-center mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  bg-zinc-950 text-white"
              : "flex items-center bg-zinc-200 mr-4 rounded-xl px-5 py-1 text-lg mb-2 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95  hover:bg-zinc-950 hover:text-white"
          }
        >
          <CiSearch
            size={25}
            className="text-black rounded-full bg-orange p-1 mr-2"
          />{" "}
          TRY IT OUT
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Recipes;
