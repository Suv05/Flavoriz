import { Suspense } from "react";
import {
  Link,
  useLoaderData,
  Await,
  defer,
  useLocation,
} from "react-router-dom";
import { fetchApi } from "../../API/tryitoutAPI/getByKeyword";
import { IoIosArrowRoundBack, IoIosMan } from "react-icons/io";
import { RiBowlLine } from "react-icons/ri";
import { PiChefHatLight } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import {
  FaCheckCircle,
  FaAppleAlt,
  FaBreadSlice,
  FaDrumstickBite,
  FaCheese,
  FaLeaf,
  FaEgg,
  FaFish,
} from "react-icons/fa";
import Spinner from "../pages/Spinner";

export async function loader({ params }) {
  const { id } = params;
  if (!id) {
    return defer({ data: Promise.resolve([]) });
  }

  try {
    const data = fetchApi(
      `https://low-carb-recipes.p.rapidapi.com/recipes/${id}`
    );
    return defer({ data });
  } catch (err) {
    console.error("Failed to fetch data", err.message);
    return defer({
      data: Promise.reject(
        new Response("Failed to fetch data", { status: 500 })
      ),
    });
  }
}
function TryitoutDetails({}) {
  const { data } = useLoaderData();
  const location = useLocation();

  return (
    <>
      <div className="px-5">
        <div className="myDetailsImg rounded-xl mb-4">
          <div>
            <h1 className="px-12 text-3xl font-extrabold pt-12">
              Mediterranea <span className="text-orange">Grilled</span>{" "}
              <span className="text-zinc-500">Chicken</span>
            </h1>
            <p className="text-small font-medium mt-4 px-12 pb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur repudiandae quae🤤Repellendus maiores error
              accusantium facilis aliquid. Itaque cumque accusamus
              necessitatibus.
            </p>
            <div className="flex flex-1 px-12 pb-14 text-zinc-400">
              <p className="flex me-8">
                <CiClock1 size={25} className="text-bold text-orange me-2" />
                <span>45 minutes</span>
              </p>
              <p className="flex">
                <PiChefHatLight
                  size={25}
                  className="text-bold text-orange me-2"
                />
                <span>Chef Erik parker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center px-5 mb-3 font-noto-sans"
        to={`/recipes/tryitout?tags=${location.state}`}
        relative="path"
        state={{ type: location.state }}
      >
        <IoIosArrowRoundBack size={35} className="text-orange" />
        <span className="text-lg font-medium hover:underline hover:scale-105 active:scale-75">
          {" "}
          Back to <span className="text-orange">Recipes</span>
        </span>
      </Link>

      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(item) => (
            <>
              <div className="mb-12 px-7">
                <div className="font-noto-sans rounded-xl recipebox mb-6">
                  <div className="flex justify-between items-center px-3">
                    <div>
                      <h1 className="text-2xl px-3 font-bold capitalize mb-3 pt-3">
                        {item.name}
                      </h1>
                    </div>
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <span className="px-1 py-1 rounded-full bg-slate-200 me-2">
                          <IoIosMan
                            size={25}
                            className="text-bold text-orange mr-1"
                          />
                        </span>
                        <div>
                          <p className="text-zinc-400 text-sm font-medium">
                            Servings
                          </p>
                          <p className="font-semibold">
                            {item.servings} Persons
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="px-1 py-1 rounded-full bg-slate-200 me-2">
                          <RiBowlLine
                            size={25}
                            className="text-bold text-orange mr-1"
                          />
                        </span>
                        <div>
                          <p className="text-zinc-400 text-sm font-medium">
                            Prep Time
                          </p>
                          <p className="font-semibold">
                            {item.prepareTime} Minutes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="px-1 py-1 rounded-full bg-slate-200 me-2">
                          <PiChefHatLight
                            size={25}
                            className="text-bold text-orange mr-1"
                          />
                        </span>
                        <div>
                          <p className="text-zinc-400 text-sm font-medium">
                            Cook Time
                          </p>
                          <p className="font-semibold">
                            {item.cookTime} Minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* item image starts here */}
                  <div className="flex flex-row">
                    <div className="basis-1/4 px-3 py-2">
                      <img src={item.image} alt="" className="rounded-2xl" />
                    </div>
                    <div className="basis-3/4 py-3 pr-2">
                      <p className="text-lg mb-3 text-zinc-600 px-3 rounded-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* ingredients box */}
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-5">
                  <h2 className="text-3xl font-bold mb-6">
                    Ingre<span className="text-orange">dients</span>
                  </h2>
                  <ul className="space-y-4">
                    {item.ingredients.map((ingredients, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b pb-4"
                      >
                        <div>
                          <h3 className="text-xl font-semibold">
                            {ingredients.name}
                          </h3>
                          <p className="text-gray-600">
                            {ingredients.servingSize.desc}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            {ingredients.servingSize.qty}{" "}
                            {ingredients.servingSize.units}
                          </p>
                          <p className="text-sm text-gray-500">
                            {ingredients.servingSize.grams} grams
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* instructions */}
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
                  <h2 className="text-3xl font-bold mb-6">
                    Cooking <span className="text-orange">Steps</span>
                  </h2>
                  <ol className="list-decimal list-inside space-y-6">
                    {item.steps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <FaCheckCircle
                          className="text-green-500 mt-1"
                          size={20}
                        />
                        <p className="text-lg text-gray-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                {/* nutrintion data */}
                <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white shadow-lg rounded-lg mt-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Nutrition <span className="text-orange">Facts</span>
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaAppleAlt className="text-2xl" />
                      <span className="font-medium">Calories</span>
                      <span>{item.nutrients.caloriesKCal.toFixed(1)} kcal</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaBreadSlice className="text-2xl" />
                      <span className="font-medium">Total Carbohydrates</span>
                      <span>{item.nutrients.totalCarbs.toFixed(1)} g</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaLeaf className="text-2xl" />
                      <span className="font-medium">Fiber</span>
                      <span>{item.nutrients.fiber.toFixed(1)} g</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaCheese className="text-2xl" />
                      <span className="font-medium">Sugar</span>
                      <span>{item.nutrients.sugar.toFixed(1)} g</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaDrumstickBite className="text-2xl" />
                      <span className="font-medium">Protein</span>
                      <span>{item.nutrients.protein.toFixed(1)} g</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaEgg className="text-2xl" />
                      <span className="font-medium">Fat</span>
                      <span>{item.nutrients.fat.toFixed(1)} g</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaFish className="text-2xl" />
                      <span className="font-medium">Cholesterol</span>
                      <span>{item.nutrients.cholesterol.toFixed(1)} mg</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
                      <FaFish className="text-2xl" />
                      <span className="font-medium">Sodium</span>
                      <span>{item.nutrients.sodium.toFixed(1)} mg</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default TryitoutDetails;
