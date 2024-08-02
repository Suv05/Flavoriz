import {
  PiChefHatLight,
  PiFediverseLogoThin,
  PiMedal,
  PiBowlFoodThin,
} from "react-icons/pi";
import { CiUser, CiHeart, CiClock1 } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

function Home({}) {
  return (
    <>
      <div className="px-4 sm:px-5 rounded-lg font-noto-sans mb-8">
        <div className="myImg rounded-lg font-noto-sans sm:px-10 pt-12 grid grid-cols-1 sm:grid-cols-2 mb-6">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Adventure of <span className="text-orange mt-2">Delicacies</span>
            </h1>
            <p className="mt-2 text-zinc-700 px-1 py-3 mb-10 text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vero dignissimos ipsam eius quia praesentium tempore.
            </p>
            <div className="px-2">
              <Link to="/recipes">
                <button className="bg-zinc-900 text-white py-2 px-4 sm:px-6 flex rounded-lg hover:bg-zinc-800 transition-transform transform hover:scale-105 active:translate-y-1 hover:rounded-md">
                  Explore Recipes
                  <span>
                    <PiChefHatLight size={22} className="ml-2 mt-0.5" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* below image component goes here */}
        <div className="flex flex-col sm:flex-row rounded-xl">
          <div className="basis-full sm:basis-3/4 bg-[#eeeeee] rounded-xl px-4 sm:px-5 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="pt-6">
                <h1 className="mb-6 text-black font-bold">
                  <CiUser size={25} />
                </h1>
                <h3 className="text-base font-bold mb-2">User centered</h3>
                <p className="text-sm text-zinc-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit nam.
                </p>
              </div>
              <div className="pt-6">
                <h1 className="mb-6 text-black font-bold">
                  <PiFediverseLogoThin size={25} />
                </h1>
                <h3 className="text-base font-bold mb-2">Diverse recipes</h3>
                <p className="text-sm text-zinc-700">
                  sit amet consectetur, adipisicing Minima in animi ipsum qui
                  possimus.
                </p>
              </div>
              <div className="pt-6">
                <h1 className="mb-6 text-black font-bold">
                  <CiHeart size={25} />
                </h1>
                <h3 className="text-base font-bold mb-2">Fun community</h3>
                <p className="text-sm text-zinc-700">
                  quaerat amet ut quis porro minima totam obcaecati ab veniam
                  architecto sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-1/4 bg-[#fefefe] mybox rounded-xl mx-2 mt-4 sm:mt-0">
            <img
              src="https://media.istockphoto.com/id/1085446276/photo/homemade-french-coq-au-vin-chicken.webp?b=1&s=170667a&w=0&k=20&c=FyuCSuYbQCZmNLvNqw8briNoaEtY7LPl4HCn5-xvV1w="
              alt="food image"
              className="rounded-xl px-1 pt-1"
            />
            <h3 className="text-orange px-3 pt-1 font-semibold">FEATURED</h3>
            <p className="px-3 font-bold">Calisbury Steak and Asparagus</p>
            <p className="text-sm underline px-3 font-light pb-2">
              <Link to="recipes">See Recipe</Link>
            </p>
          </div>
        </div>
        {/* another part of the web page */}
        <div className="mt-12">
          <center className="leading-relaxed px-4 sm:px-20">
            <h1 className="text-2xl sm:text-3xl font-noto-sans font-semibold mb-1">
              Become a true <span className="text-orange">chef</span> with our
              recipes.
            </h1>
            <p>
              We are a home to variety of recipes world-wide for you to learn.
            </p>
          </center>
        </div>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-4 px-4 sm:px-5 pb-12">
          <div className="bg-zinc-200 rounded-xl px-2 pt-2 mb-3">
            <img
              src="https://media.istockphoto.com/id/1436956975/photo/chef-pouring-special-sauce-on-pork-ribs-in-the-kitchen.webp?b=1&s=170667a&w=0&k=20&c=dqjedk3BRtemi6aGrR62j4_HQ7NVZIsGNyTHOedV4_o="
              alt=""
              className="rounded-xl"
            />
            <button
              disabled={true}
              className="flex bg-white text-sm rounded-xl px-3 pt-2 pb-1 my-2"
            >
              <SiTicktick size={18} className="text-orange me-1" />
              Easy To follow recipes
            </button>
          </div>
          <div className="bg-orange mt-6 rounded-xl mb-2 p-4">
            <p className="text-white font-semibold text-lg sm:text-xl px-3 pt-3">
              "Cooking has never been this easy!"
            </p>
            <p className="text-white text-base px-4 mt-3 font-semibold">
              Marsha Shetty
            </p>
            <p className="text-[#d6c9c9] text-xs px-4">Master Chef, 2023</p>
          </div>
          <div className="bg-zinc-200 rounded-xl mt-16 px-2">
            <div className="bg-white flex px-1 py-1 mb-2 rounded-lg mt-2">
              <PiMedal
                size={25}
                className="me-2 rounded-full px-1 py-1 text-orange bg-zinc-200 mt-1"
              />
              <section className="text-sm font-semibold">
                Achievements
                <p className="text-xs font-thin">cook two foods today</p>
              </section>
            </div>
            <div className="bg-white flex px-1 py-1 mb-2 rounded-lg mt-2">
              <PiChefHatLight
                size={25}
                className="me-2 rounded-full px-1 py-1 text-orange bg-zinc-200 mt-1"
              />
              <section className="text-sm font-semibold">
                Live
                <p className="text-xs font-thin">Chef Mark Johnson</p>
              </section>
            </div>
            <div className="bg-white flex px-1 py-1 mb-2 rounded-lg mt-2">
              <PiBowlFoodThin
                size={25}
                className="me-2 rounded-full px-1 py-1 text-orange bg-zinc-200 mt-1"
              />
              <section className="text-sm font-semibold">
                Today's recipe
                <p className="text-xs font-thin">Spaghetti Chicken</p>
              </section>
            </div>
          </div>
          <div className="bg-zinc-200 rounded-xl px-1 py-1">
            <img
              src="https://media.istockphoto.com/id/1217012868/photo/handsome-young-african-chef-standing-in-professional-kitchen-in-restaurant-preparing-a-meal.webp?b=1&s=170667a&w=0&k=20&c=pcVtkj_n-iKi8xbb5NylgStFk4zN2EF9pYmvZKd-Kno="
              alt="chef"
              className="rounded-md w-full h-auto"
            />
            <section
              style={{ float: "right" }}
              className="text-red-600 px-2 py-2 mt-1 text-sm font-medium"
            >
              Live
            </section>
            <p className="bg-white text-lg font-semibold px-2 mt-2 mb-2 py-2 rounded-xl text-center sm:text-left">
              Cook with Master Chefs
            </p>
          </div>
        </div>
        <div className="myfoodImg rounded-lg">
          <div className="px-4 sm:px-12">
            <h1 className="text-3xl font-extrabold pt-12">
              Mediterranea <span className="text-orange">Grilled</span>{" "}
              <span className="text-zinc-200">Chicken</span>
            </h1>
            <p className="text-small font-medium mt-4 pb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur repudiandae quae? Repellendus maiores error
              accusantium facilis aliquid. Itaque cumque accusamus
              necessitatibus.
            </p>
            <div className="flex flex-wrap px-0 sm:px-12 pb-14 text-white">
              <p className="flex items-center me-8 mb-2 sm:mb-0">
                <CiClock1 size={25} className="text-bold text-orange" />
                <span className="ml-2">45 minutes</span>
              </p>
              <p className="flex items-center">
                <PiChefHatLight size={25} className="text-bold text-orange" />
                <span className="ml-2">Chef Erik Parker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
