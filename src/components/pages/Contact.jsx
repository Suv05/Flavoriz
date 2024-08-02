import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handelSubmit = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-5">
              Get in Touch <span className="text-orange">with Us</span>
            </h2>
            <p className="mb-5">
              Connect with culinary excellence effortlessly. Whether you have a
              burning question about a recipe or want to share your cooking
              triumphs, our dedicated team is just a message away for our
              food-loving community.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-semibold">Phone:</span>
                <span>(+555) 555-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold">Email Address:</span>
                <span>info@flavoriz.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold">Location:</span>
                <span>
                  123 Culinary Street, Foodieville, Any State CO 12345
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src="https://media.istockphoto.com/id/1436956975/photo/chef-pouring-special-sauce-on-pork-ribs-in-the-kitchen.webp?b=1&s=170667a&w=0&k=20&c=dqjedk3BRtemi6aGrR62j4_HQ7NVZIsGNyTHOedV4_o="
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-64 bg-gray-300 mt-8">
          <iframe
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-md mt-10 p-10">
        <h2 className="text-3xl font-bold mb-5">
          Send <span className="text-orange">Us</span> A Message
        </h2>
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <textarea
            placeholder="Comment"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          ></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent" className="text-sm">
              By filling this form, I hereby consent to be sent a monthly
              newsletter from Craftly with my email address.
            </label>
          </div>
          <button
            type="submit"
            className="px-5 py-3 bg-orange text-white font-semibold rounded-md hover:bg-orange"
            onClick={handelSubmit}
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
