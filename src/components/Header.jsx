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
      {/* BACKDROP GLOW */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />

      {/* FLOATING GLASS BAR */}
      <div className="relative max-w-7xl mx-auto px-6 pt-4">
        <div
          className="
          rounded-2xl
          bg-white/70 backdrop-blur-2xl
          border border-white/40
          shadow-[0_30px_80px_rgba(15,23,42,0.18)]
          transition-all
        "
        >
          <div className="px-6 py-4 flex items-center justify-between">

            {/* LEFT ZONE */}
            <div className="flex items-center gap-10">

              {/* LOGO BADGE */}
              <Link
                to="/"
                className="
                group flex items-center gap-3
                px-4 py-2 rounded-xl
                bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                hover:-translate-y-[1px]
                transition-all
              "
              >
                <img
                  src="/logo_a.png"
                  alt="Applied Finance Letters Insight"
                  className="h-9 drop-shadow-md"
                />
                <span className="text-white font-bold tracking-wide">
                  Applied Finance Letters Insight
                </span>
              </Link>

              {/* NAV */}
              <nav className="hidden lg:flex items-center gap-3 text-sm font-semibold">
                {[
                  ["/", "Home"],
                  ["/current", "Current"],
                  ["/archives", "Archives"],
                  ["/announcements", "Announcements"],
                  ["/about", "About"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={path}
                    className={`
                    px-4 py-2 rounded-xl transition-all
                    ${
                      isActive(path)
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md"
                        : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* RIGHT ZONE */}
            <div className="flex items-center gap-3">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="
                    px-4 py-2 rounded-xl text-sm font-semibold
                    text-slate-700 hover:bg-slate-100
                    transition
                  "
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="
                    px-6 py-2 rounded-xl text-sm font-semibold
                    text-white
                    bg-gradient-to-r from-indigo-500 to-cyan-500
                    shadow-[0_10px_25px_rgba(79,70,229,0.45)]
                    hover:shadow-[0_18px_45px_rgba(79,70,229,0.6)]
                    hover:-translate-y-[1px]
                    transition-all
                  "
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="
                  px-6 py-2 rounded-xl text-sm font-semibold
                  text-white
                  bg-gradient-to-r from-indigo-500 to-cyan-500
                  shadow-[0_10px_25px_rgba(79,70,229,0.45)]
                  hover:shadow-[0_18px_45px_rgba(79,70,229,0.6)]
                  hover:-translate-y-[1px]
                  transition-all
                "
                >
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
