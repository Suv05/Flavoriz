import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";

function Footer({}) {
  return (
    <div className="px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-zinc-900 text-white rounded-t-xl font-noto-sans">
        <div className="px-4 pt-3">
          <h1 className="font-semibold text-3xl mb-2">
            FLA<span className="text-orange">VORIZ</span>
          </h1>
          <p className="text-sm text-neutral-300 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates
            optio nulla autem consectetur
          </p>
          <p className="text-xs text-neutral-500 mb-2">
            &#169;ALL RIGHTS RESERVED BY FLAVORIZ
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div>
            <h3 className="mb-2">Company</h3>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>About us</Link>
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>Our scores</Link>
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>Careers</Link>
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>View event</Link>
            </p>
          </div>
          <div>
            <h3 className="mb-2">Beyond</h3>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>Our team</Link>
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>Media Mentions</Link>
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>Income Reports</Link>
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              <Link>Recipe Index</Link>
            </p>
          </div>
          <div>
            <h3 className="mb-2">Contact</h3>
            <p className="text-xs text-neutral-400 mb-2">
              <Link>
                <FaInstagram size={15} />
              </Link>
            </p>
            <p className="text-xs text-neutral-400 mb-2">
              <Link>
                <FaTwitch size={15} />
              </Link>
            </p>
            <p className="text-xs text-neutral-400 mb-2">
              <Link>
                <FaFacebook size={15} />
              </Link>
            </p>
            <p className="text-xs text-neutral-400 mb-2">
              <Link>
                <FaTiktok size={15} />
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              className="bg-zinc-800 px-2 mb-2 sm:mb-0 sm:me-3 focus:outline-none focus:ring-0 focus:outline-orange"
              placeholder="Enter your Email"
            />
            <button className="bg-orange px-2 rounded-lg hover:text-slate-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
