import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

        {/* LEFT: BRAND */}
        <div className="flex items-center gap-3">
          <img src="/logo_a.png" alt="Logo" className="h-10 rounded-md" />
          <span className="font-bold text-slate-900 tracking-tight">
            Applied Finance Insights
          </span>
        </div>

        {/* CENTER: NAV (PRODUCT STYLE) */}
        <nav className="hidden lg:flex justify-center gap-6 text-sm font-medium text-slate-600">
          {[
            ["/", "Home"],
            ["/editorial-team", "Current"],
            ["/archives", "Archives"],
            ["/announcements", "Announcements"],
            ["/about", "About"],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-full transition ${
                isActive(path)
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "hover:bg-slate-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: ACTIONS */}
        <div className="flex justify-end gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 text-sm font-semibold rounded-lg
                bg-gradient-to-r from-blue-500 to-blue-600 text-white
                shadow hover:shadow-lg transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 text-sm font-semibold rounded-lg
              bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
