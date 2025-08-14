import {
  PiChefHatLight,
  PiFediverseLogoThin,
  PiMedal,
  PiBowlFoodThin,
} from "react-icons/pi";
import { CiUser, CiHeart, CiClock1 } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-noto-sans">

      {/* 🌅 Hero Section */}
      <section className="relative bg-cover bg-center rounded-xl overflow-hidden min-h-[70vh] flex items-center px-6 sm:px-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')`
        }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Adventure of <span className="text-orange">Delicacies</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-200">
            Explore a world of flavors and master the art of cooking with our chef-crafted recipes.
          </p>
          <Link to="/recipes">
            <button className="mt-6 bg-orange text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange/90 transition-all hover:scale-105 flex items-center">
              Explore Recipes <PiChefHatLight size={22} className="ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* 🌟 Features */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 px-4 sm:px-12">
        {[
          { icon: <CiUser size={28} />, title: "User Centered", desc: "Personalized content & recommendations." },
          { icon: <PiFediverseLogoThin size={28} />, title: "Diverse Recipes", desc: "From quick snacks to gourmet dishes." },
          { icon: <CiHeart size={28} />, title: "Fun Community", desc: "Share, learn & connect with fellow foodies." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
            <div className="text-orange mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 🏆 Featured Recipe */}
      <section className="mt-12 px-4 sm:px-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="sm:col-span-2 bg-[#fefefe] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
          <img
            src="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Featured Dish"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-orange font-semibold">FEATURED</h3>
            <h2 className="font-bold text-lg mt-1">Calisbury Steak and Asparagus</h2>
            <Link to="/recipes" className="text-sm underline text-orange">See Recipe</Link>
          </div>
        </div>
        <div className="bg-orange text-white rounded-xl p-6 shadow-lg flex flex-col justify-center">
          <p className="text-xl font-semibold">"Cooking has never been this easy!"</p>
          <p className="mt-4 font-semibold">Marsha Shetty</p>
          <p className="text-sm text-orange-200">Master Chef, 2023</p>
        </div>
      </section>

      {/* 🍲 Category Highlights */}
      {/* 🍲 Category Highlights */}
<section className="mt-16 px-4 sm:px-12">
  <h2 className="text-2xl font-bold text-center mb-8">Explore by Categories</h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {[
      {
        name: "Breakfast",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", // Breakfast photo
      },
      {
        name: "Lunch",
        img: "https://images.unsplash.com/photo-1551218808-94e220e084d2", // Lunch photo
      },
      {
        name: "Dinner",
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // Dinner photo
      },
      {
        name: "Desserts",
        img: "https://images.unsplash.com/photo-1604152135912-04a022e23696", // Dessert photo
      },
    ].map((cat, i) => (
      <div
        key={i}
        className="relative h-40 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
      >
        <img
          src={cat.img}
          alt={cat.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-lg">
          {cat.name}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ⏳ Live & Achievements */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-12">
        <div className="bg-zinc-100 rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <PiMedal size={22} className="text-orange mr-2" /> Achievements
          </h3>
          <p className="text-sm text-neutral-600">Cooked two amazing dishes today!</p>
        </div>
        <div className="bg-zinc-100 rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <PiChefHatLight size={22} className="text-orange mr-2" /> Live Cooking
          </h3>
          <p className="text-sm text-neutral-600">Chef Mark Johnson streaming now</p>
        </div>
        <div className="bg-zinc-100 rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <PiBowlFoodThin size={22} className="text-orange mr-2" /> Today’s Special
          </h3>
          <p className="text-sm text-neutral-600">Spaghetti Chicken</p>
        </div>
      </section>

      {/* 🍗 Final CTA */}
      <section className="mt-20 bg-cover bg-center rounded-xl overflow-hidden text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')`
        }}>
        <div className="bg-black/50 p-12 text-center">
          <h2 className="text-3xl font-bold">Join Thousands of Food Lovers</h2>
          <p className="mt-3 text-lg">Master new dishes and share your creations today.</p>
          <Link to="/recipes">
            <button className="mt-6 bg-orange px-6 py-3 rounded-lg hover:bg-orange/90 transition-all">Get Started</button>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
