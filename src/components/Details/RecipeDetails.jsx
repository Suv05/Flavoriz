import { Link, Await, defer, useLoaderData } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosMan } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { BsClockFill } from "react-icons/bs";
import { fetchChinese } from "../../API/ChineseDB/getChinese";
import { Suspense } from "react";
import Spinner from "../pages/Spinner";
import { PiChefHatLight } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";

export async function loader({ params }) {
  const { id } = params;
  if (!id) {
    return defer({ data: Promise.resolve([]) });
  }
  try {
    const data = fetchChinese(`https://chinese-food-db.p.rapidapi.com/${id}`);
    return defer({ data });
  } catch (err) {
    console.error(err.message);
    return defer({
      data: Promise.reject(
        new Response("can't fetched data from server", { status: 500 })
      ),
    });
  }
}
function RecipeDetails({}) {
  const { data } = useLoaderData();
  return (
    <>
      <div className="px-5">
        <div className="myrecipeImg rounded-xl mb-4 text-right">
          <div>
            <h1 className="px-12 text-3xl font-extrabold pt-12">
              Mediterranea <span className="text-orange">Grilled</span>{" "}
              <span className="text-zinc-100">Chicken</span>
            </h1>
            <p className="text-small font-medium mt-4 px-12 pb-10 text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur repudiandae quae🤤Repellendus maiores error
              accusantium facilis aliquid. Itaque cumque accusamus
              necessitatibus.
            </p>
            <div className="flex justify-end px-12 pb-14 text-zinc-400">
              <p className="flex me-8 items-center">
                <CiClock1 size={25} className="text-bold text-orange me-2" />
                <span>45 minutes</span>
              </p>
              <p className="flex items-center">
                <PiChefHatLight
                  size={25}
                  className="text-bold text-orange me-2"
                />
                <span>Chef Erik Parker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center px-5 mb-3 font-noto-sans"
        to=".."
        relative="path"
      >
        <IoIosArrowRoundBack size={35} className="text-orange" />
        <span className="text-lg font-medium hover:underline hover:scale-105 active:scale-75">
          {" "}
          Back to <span className="text-orange">Recipes</span>
        </span>
      </Link>

      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(item) => {
            return (
              <>
                <div className="mb-12 px-7">
                  <div className="font-noto-sans rounded-xl recipebox mb-6">
                    <h1 className="text-2xl px-3 font-bold capitalize mb-3 pt-3">
                      {item.title}
                    </h1>
                    <div className="flex flex-row">
                      <div className="basis-1/4 px-3 py-2">
                        <img src={item.image} alt="" className="rounded-2xl" />
                      </div>
                      <div className="basis-3/4 py-3 pr-2">
                        <p className="text-lg mb-3 text-zinc-700 px-3 rounded-lg">
                          {item.description}
                        </p>
                        <div className="px-4">
                          <div className="flex mb-2">
                            <span className="px-5 py-2 rounded-2xl bg-zinc-200 me-3">
                              <SiLevelsdotfyi
                                size={20}
                                className="text-orange"
                              />
                            </span>
                            <span className="text-lg px-3 py-2 rounded-lg">
                              {item.difficulty} Level
                            </span>
                          </div>
                          <div className="flex mb-2">
                            <span className="px-5 py-2 rounded-2xl bg-zinc-200 me-3">
                              <IoIosMan size={20} className="text-orange" />
                            </span>
                            <span className="text-lg px-3 py-2 bg-white rounded-lg">
                              {item.portion}
                            </span>
                          </div>
                          <div className="flex mb-2">
                            <span className="px-5 py-2 rounded-2xl bg-zinc-200 me-3">
                              <BsClockFill size={20} className="text-orange" />
                            </span>
                            <span className="text-lg px-3 py-2 bg-white rounded-lg">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ingredients box */}
                  <div className="font-noto-sans mb-6 px-4">
                    <h1 className="text-3xl font-bold mb-6">
                      INGRE
                      <span className="text-orange-500 underline">DIENTS</span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {item.ingredients.map((i, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                          <input
                            type="checkbox"
                            name="tick"
                            className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-2 focus:ring-orange-500"
                          />
                          <span className="text-lg font-medium capitalize">
                            {i}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* instructions */}
                  <div className="font-noto-sans">
                    <h1 className="px-3 pt-5 text-2xl font-bold mb-5">
                      INSTRUC
                      <span className="text-orange underline">TIONS</span>
                    </h1>
                    <div className="instructionbox px-3 pb-5">
                      {item.method.map((step, index) => (
                        <div key={index} className="mb-3">
                          <h3 className="text-xl font-semibold mb-1 text-orange pt-2 ">
                            {Object.keys(step)[0]}
                          </h3>
                          <p className="text-lg bg-zinc-200 rounded-xl pl-1">
                            {Object.values(step)[0]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default RecipeDetails;
