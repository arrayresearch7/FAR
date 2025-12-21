import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Only these routes belong to About dropdown
  const aboutRoutes = ['/about', '/submissions'];
  const isActive = (path) => location.pathname === path;
  const isAboutActive = aboutRoutes.includes(location.pathname);

  return (
    <header className="bg-[#145a45] text-white shadow-lg rounded-b-lg">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center rounded-md p-1">
          <img
            src="/logo_a.png"
            alt="Journal Logo"
            className="md:h-20 h-20 w-48 rounded-2xl"
          />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="rounded-full px-4 py-2 font-bold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="rounded-full px-4 py-2 font-bold bg-purple-50 text-purple-800 hover:bg-purple-100 border transition"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-full px-4 py-2 font-bold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-purple-800 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:items-center gap-6 pb-4`}>
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg font-bold ${
              isActive('/') ? 'bg-yellow-500 text-gray-900' : 'hover:bg-yellow-500 hover:text-gray-900'
            }`}
          >
            Home
          </Link>

          <Link
            to="/editorial-team"
            className={`px-4 py-2 rounded-lg font-bold ${
              isActive('/editorial-team')
                ? 'bg-yellow-500 text-gray-900'
                : 'hover:bg-yellow-500 hover:text-gray-900'
            }`}
          >
            Current
          </Link>

          <Link
            to="/archives"
            className={`px-4 py-2 rounded-lg font-bold ${
              isActive('/archives')
                ? 'bg-yellow-500 text-gray-900'
                : 'hover:bg-yellow-500 hover:text-gray-900'
            }`}
          >
            Archives
          </Link>

          <Link
            to="/announcements"
            className={`px-4 py-2 rounded-lg font-bold ${
              isActive('/announcements')
                ? 'bg-yellow-500 text-gray-900'
                : 'hover:bg-yellow-500 hover:text-gray-900'
            }`}
          >
            Announcements
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className={`px-4 py-2 rounded-lg font-bold flex items-center gap-1 ${
                isAboutActive
                  ? 'bg-yellow-500 text-gray-900'
                  : 'hover:bg-yellow-500 hover:text-gray-900'
              }`}
            >
              About
              <svg
                className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`${
                open ? 'block' : 'hidden'
              } absolute mt-2 w-64 bg-white text-gray-800 border rounded-lg shadow-xl z-50`}
            >
              <Link
                to="/about"
                className={`block px-4 py-3 font-bold ${
                  isActive('/about')
                    ? 'bg-purple-50 text-purple-800'
                    : 'hover:bg-purple-50 hover:text-purple-800'
                }`}
              >
                About the Journal
              </Link>

              <Link
                to="/submissions"
                className={`block px-4 py-3 font-bold ${
                  isActive('/submissions')
                    ? 'bg-purple-50 text-purple-800'
                    : 'hover:bg-purple-50 hover:text-purple-800'
                }`}
              >
                Submissions
              </Link>
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="lg:hidden flex flex-col gap-3 mt-4">
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="bg-yellow-500 text-gray-900 rounded-full px-4 py-2 font-bold">
                  Register
                </Link>
                <Link to="/login" className="bg-purple-50 text-purple-800 rounded-full px-4 py-2 font-bold">
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-yellow-500 text-gray-900 rounded-full px-4 py-2 font-bold"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
