import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white font-noto-sans px-6 py-10 mt-10 rounded-t-xl">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h1 className="font-bold text-2xl mb-3">
            FLA<span className="text-orange">VORIZ</span>
          </h1>
          <p className="text-sm text-neutral-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates optio nulla autem consectetur.
          </p>
          <p className="text-xs text-neutral-500">
            &#169; {new Date().getFullYear()} All rights reserved by Flavoriz
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Company</h3>
          {["About us", "Our scores", "Careers", "View event"].map((item) => (
            <Link
              key={item}
              to="/"
              className="block text-sm text-neutral-400 hover:text-orange transition-colors mb-2"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Beyond Links */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Beyond</h3>
          {["Our team", "Media Mentions", "Income Reports", "Recipe Index"].map((item) => (
            <Link
              key={item}
              to="/"
              className="block text-sm text-neutral-400 hover:text-orange transition-colors mb-2"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Stay Connected</h3>
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="p-2 bg-zinc-800 rounded-full hover:bg-orange transition-colors">
              <FaInstagram size={16} />
            </Link>
            <Link to="/" className="p-2 bg-zinc-800 rounded-full hover:bg-orange transition-colors">
              <FaTwitch size={16} />
            </Link>
            <Link to="/" className="p-2 bg-zinc-800 rounded-full hover:bg-orange transition-colors">
              <FaFacebook size={16} />
            </Link>
            <Link to="/" className="p-2 bg-zinc-800 rounded-full hover:bg-orange transition-colors">
              <FaTiktok size={16} />
            </Link>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="flex-1 bg-zinc-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-orange px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange/90 hover:text-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
