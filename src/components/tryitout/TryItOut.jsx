import { useState, Suspense } from "react";
import {
  Link,
  useLoaderData,
  defer,
  Await,
  useLocation,
} from "react-router-dom";
import { useForm } from "react-hook-form";

import { fetchApi } from "../../API/tryitoutAPI/getByKeyword";

import { CiSearch } from "react-icons/ci";
import { PiChefHatLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

import Spinner from "../pages/Spinner";

export async function loader({ request }) {
  const url = new URL(request.url);
  const getTag = url.searchParams.get("tags");
  if (!getTag) {
    return defer({ data: Promise.resolve([]) });
  }
  try {
    const data = fetchApi(
      `https://low-carb-recipes.p.rapidapi.com/search?tags=${getTag}`
    );
    return defer({ data });
  } catch (e) {
    console.error("Failed to fetch data", e.message);
    return defer({
      data: Promise.reject(
        new Response("Failed to fetch data", { status: 500 })
      ),
    });
  }
}

function TryItOut() {
  const keyWords = [
    // Add other keywords as needed
    "appetizer",
    "beef-free",
    "beverages",
    "breakfast",
    "desserts",
    "eggs",
    "fish",
    "freezer-friendly",
    "french",
    "gluten-free",
    "good-for-leftovers",
    "grains",
    "high-protein",
    "keto",
    "kid-friendly",
    "lchf",
    "low-carb",
    "lunch",
    "main-dishes",
    "no-cooking-required",
    "one-pot-meals",
    "paleo",
    "pantry-recipes",
    "peanut-free",
    "peanuts",
    "pescatarian",
    "pork-free",
    "quick-easy",
    "relevant-meal--beverages",
    "relevant-meal--breakfast",
    "relevant-meal--desserts",
    "relevant-meal--lunch",
    "relevant-meal--main-dishes",
    "relevant-meal--salads",
    "relevant-meal--",
    "relevant-meal--snacks",
    "salads",
    "sheet-pan-dinners",
    "shellfish",
    "skillet",
    "snacks",
    "soy-free",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
  ];

  const { data } = useLoaderData();
  const location = useLocation();

  const [active, setActive] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);

  const handelOnClick = (keyWord) => {
    setActive(keyWord);
  };

  const onSubmit = async (formData) => {
    try {
      const result = await fetchApi(
        `https://low-carb-recipes.p.rapidapi.com/search?name=${formData.recipe}`
      );
      setSearchResult(result);
      setSearchError(null);
    } catch (error) {
      setSearchResult(null);
      setSearchError("Failed to fetch recipes");
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mb-4">
        <div className="flex mt-2 mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            {errors.recipe && (
              <div className="absolute top-[-3rem] left-0 flex items-center justify-center w-full">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md w-96 flex items-center">
                  <p className="flex-grow">
                    <strong className="font-bold">Error:</strong> This field is
                    required
                  </p>
                  <button className="ml-2">
                    <IoMdClose size={18} />
                  </button>
                </div>
              </div>
            )}
            <input
              type="text"
              placeholder="Search recipes"
              className={`sm:w-72 md:w-80 rounded-2xl focus:outline-none focus:ring-1 bg-[#f5f5f5] py-2 px-3 me-2 ${
                errors.recipe ? "border border-red-500" : ""
              }`}
              {...register("recipe", { required: true })}
            />
            <span className="rounded-full bg-neutral-100 py-2 px-2">
              <button
                type="submit"
                className="active:scale-75 hover:scale-110 hover:text-orange"
              >
                <CiSearch size={20} />
              </button>
            </span>
          </form>
        </div>
      </div>
      {/* keywords for recipe search */}

      <div className="flex flex-wrap justify-center items-center gap-4 font-noto-sans px-5 mb-8">
        {keyWords.map((i) => (
          <Link
            to={`?tags=${i}`}
            key={i}
            onClick={() => handelOnClick(i)}
            state={{type:i}}
          >
            <p
              className={`px-4 py-2 rounded-full border-2 border-orange whitespace-nowrap ${
                active === i
                  ? "bg-orange text-white"
                  : "hover:bg-orange hover:text-white transition duration-200"
              } `}
            >
              {" "}
              {i}
            </p>
          </Link>
        ))}
      </div>
      {/* Display the fetched data */}
      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(item) => {
            const recipes = searchResult || item;
            if (searchError) {
              return (
                <div className="flex justify-center items-center w-full">
                  <p className="text-2xl font-bold my-7 text-orange">
                    {searchError}
                  </p>
                </div>
              );
            }
            return (
              <div className="grid md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-5 gap-4 px-5 mb-12">
                {Array.isArray(recipes) && recipes.length > 0
                  ? recipes.map((i) => (
                      <div
                        key={i.id}
                        className="relative bg-slate-200 rounded-t-xl px-3 pt-1 flex flex-col justify-between"
                      >
                        <div className="relative">
                          <img
                            src={i.image}
                            className="m-auto rounded-2xl mb-1 mt-2"
                          />
                          {/* <button className="absolute top-3 right-3 text-red-600 hover:text-orange transition-colors">
                            <GrFavorite size={30} />
                          </button> */}
                        </div>
                        <div>
                          <h1 className="text-lg font-bold mb-1">{i.name}</h1>
                        </div>
                        <div className="bg-zinc-950 rounded-3xl text-white mb-3 mt-auto">
                          <Link to={`${i.id}`} state={location.state?.type}>
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
                    ))
                  : null}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default TryItOut;
