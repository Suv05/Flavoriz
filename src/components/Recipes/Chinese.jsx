import { Suspense, useState, useEffect } from "react";
import { Link, Await, defer, useLoaderData } from "react-router-dom";
import { fetchChinese } from "../../API/ChineseDB/getChinese";
import { PiChefHatLight } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import Spinner from "../pages/Spinner";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../Redux Store/features/favoriteSlice";

export async function loader() {
  try {
    const data = fetchChinese("https://chinese-food-db.p.rapidapi.com/");
    return defer({ data }); // Ensure correct structure
  } catch (error) {
    console.error(error);
    return defer({
      data: Promise.reject(new Response("Can't get the Recipes")),
    });
  }
}

function Chinese() {
  const { data } = useLoaderData();
  const dispatch = useDispatch();
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("favoriteIds"));
    if (storedFav) {
      setFav(storedFav);
    }
  }, []);

  const handelAddFavorite = (getRecipe) => {
    dispatch(addFavorite(getRecipe));
    setFav((prevFav) => {
      const updatedFav = prevFav.includes(getRecipe.id)
        ? prevFav.filter((id) => id !== getRecipe.id)
        : [...prevFav, getRecipe.id];
      localStorage.setItem("favoriteIds", JSON.stringify(updatedFav));
      return updatedFav;
    });
  };

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={data}>
        {(item) => {
          return (
            <div className="grid md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-5 gap-4 px-5 mb-12">
              {item &&
                item.map((i) => (
                  <div
                    key={i.id}
                    className="relative bg-slate-200 rounded-t-xl px-3 pt-1 flex flex-col justify-between"
                  >
                    <div className="relative">
                      <img
                        src={i.image}
                        className="m-auto rounded-2xl mb-1 mt-2"
                        alt={i.title}
                      />
                      <button
                        className={`absolute top-3 right-3 rounded-full px-1 py-1 ${
                          fav.includes(i.id)
                            ? "bg-orange text-white"
                            : "text-red-600 hover:text-orange transition-colors"
                        }`}
                        onClick={() => handelAddFavorite(i)}
                      >
                        <GrFavorite size={30} />
                      </button>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold mb-1">{i.title}</h1>
                    </div>
                    <div className="bg-zinc-950 rounded-3xl text-white mb-3 mt-auto">
                      <Link to={`${i.id}`}>
                        <button className="pl-2 pb-0.5 flex justify-between w-full items-center hover:bg-zinc-800 transition-transform transform hover:scale-105 active:translate-y-1 hover:rounded-md">
                          <span className="text-lg font-extralight">
                            See Recipe
                          </span>
                          <span className="rounded-full px-1 py-1 bg-white text-black mr-2 mb-0.5 mt-1">
                            <PiChefHatLight size={20} />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default Chinese;
