import React, { useEffect, useState } from "react";
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
    <header className="sticky top-0 z-50">
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT: LOGO + BRAND + NAV */}
          <div className="flex items-center gap-8">

            {/* Logo + Brand */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo_a.png"
                alt="Applied Finance Insights"
                className="h-10"
              />
              <span className="font-bold text-slate-900 tracking-tight">
                Applied Finance Insights
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-700">
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
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-slate-100"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT: AUTH ACTIONS */}
          <div className="flex gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-blue-600
                  hover:bg-blue-50 rounded-lg transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 text-sm font-semibold rounded-lg
                  bg-gradient-to-r from-blue-500 to-blue-600
                  text-white shadow-md hover:shadow-lg transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-semibold rounded-lg
                bg-gradient-to-r from-blue-500 to-blue-600
                text-white shadow-md"
              >
                Logout
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
