import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-50">
      {/* Culinary Stories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Our <span className="text-orange">Culinary</span> Stories
          </h1>
          <p className="text-gray-700 mb-8">
            Discover the stories behind our culinary creations and the passion
            that drives us.
          </p>
          <img
            src="https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.webp?b=1&s=170667a&w=0&k=20&c=WUZHzzMAuQur3xuh4NVWUWZ77_PQqf3yCkoZ5Ftsfnk="
            alt="Culinary Stories"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Transformative Power Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              We believe in the transformative power of cooking and good food
            </h2>
            <p className="text-gray-700 mb-4">
              Join us in exploring the endless possibilities that cooking
              offers. Our recipes are designed to inspire and transform your
              cooking experience.
            </p>
            <div className="bg-amber-200 p-4 rounded-lg shadow-md mb-4">
              <p className="text-orange font-semibold">
                "Flavoriz has always helped my cooking."
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Transformative Power"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange">1 Million+</h3>
            <p className="text-gray-700">Recipes</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange">5,000+</h3>
            <p className="text-gray-700">Chefs</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange">95%</h3>
            <p className="text-gray-700">Success Rate</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-orange">10,000+</h3>
            <p className="text-gray-700">Reviews</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Values That <span className="text-orange">Shape</span> Flavoriz
          </h2>
          <p className="text-gray-700 mb-8">
            Our core values drive our passion for culinary excellence and
            innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-700">
                We use only the finest ingredients to create exceptional
                recipes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                Constantly pushing the boundaries of culinary creativity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-700">
                Committed to sustainable and eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs and Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            The Flavor <span className="text-orange">Chefs</span> and Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1623086781/photo/happy-business-owner-managing-a-bakery-and-using-a-digital-tablet.webp?b=1&s=170667a&w=0&k=20&c=91J3dZDlFwChRdzth-eGGnLla0n17iGqTM1bFXs7lUw="
                alt="Chef 1"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Charles Rodriguez</h3>
              <p className="text-gray-700">Head Chef</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chef 2"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Emily Johnson</h3>
              <p className="text-gray-700">Pastry Chef</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1401772072/photo/skilled-gastronomy-expert-garnishing-gourmet-dish-with-parmesan-cheese-in-restaurant.webp?b=1&s=170667a&w=0&k=20&c=wFw6L5E7dNA7NJfl_32WbyJLG6hV32_5RxaolKdcH48="
                alt="Chef 3"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">David Young</h3>
              <p className="text-gray-700">Sous Chef</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Make Cooking Much Easier with{" "}
            <span className="text-orange">Our Recipes</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Explore our extensive collection of recipes designed to make cooking
            enjoyable and easy.
          </p>
          <div className="flex justify-center">
            <Link to="/recipes">
              <button className="bg-orange text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-300">
                Explore Recipes
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
