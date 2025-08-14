import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Main nav (no Favorites here)
  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/recipes", label: "RECIPES" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Logo */}
        <Link to="/" className="hover:scale-110 active:scale-90 transition-transform">
          <h1 className="font-noto-sans font-bold text-lg md:text-xl">
            FLA<span className="text-orange">VORIZ</span>
          </h1>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center font-noto-sans">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "mx-3 font-semibold text-sm underline decoration-orange"
                  : "mx-3 font-normal text-xs hover:text-sm hover:font-medium transition-all"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Desktop Favorites + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Desktop Favorites (right corner) */}
          <NavLink
            to="/fav"
            className={({ isActive }) =>
              `hidden md:flex items-center gap-2 font-noto-sans transition-colors ${
                isActive ? "text-orange font-semibold" : "hover:opacity-80"
              }`
            }
          >
            <GrFavorite size={20} />
            <span>FAVORITES</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (includes Favorites) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {[...navLinks, { path: "/fav", label: "FAVORITES", icon: <GrFavorite size={18} /> }].map(
            ({ path, label, icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-noto-sans flex items-center gap-2 ${
                    isActive
                      ? "font-semibold underline decoration-orange"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                {icon && icon}
                {label}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
