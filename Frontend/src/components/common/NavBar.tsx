import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { navItemList } from '../../data/nav';
import { navItems } from '../../types/navItem';
import AuthButton from '../auth/AuthButton';
import { logout } from '../../modules/auth/store/authSlice';
import { setUser } from '../../modules/user/store/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../modules/firebase';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const user = useSelector((state: RootState) => state.user.user);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      dispatch(setUser(null));
      navigate('/');
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Fint
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage && (
            <ul className="flex space-x-6">
              {navItemList.map((item: navItems) =>
                item.active ? (
                  <li key={item.name}>
                    <a 
                      href={item.slug} 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          )}
          
          {!isHomePage && authStatus && (
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium ${
                    location.pathname === '/dashboard' ? 'text-blue-600' : ''
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/transactions" 
                  className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium ${
                    location.pathname === '/transactions' ? 'text-blue-600' : ''
                  }`}
                >
                  Transactions
                </Link>
              </li>
              <li>
                <Link 
                  to="/goals" 
                  className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium ${
                    location.pathname === '/goals' ? 'text-blue-600' : ''
                  }`}
                >
                  Goals
                </Link>
              </li>
              <li>
                <Link 
                  to="/investments" 
                  className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium ${
                    location.pathname === '/investments' ? 'text-blue-600' : ''
                  }`}
                >
                  Investments
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {authStatus ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">
                    {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="hidden sm:block font-medium">
                  {user?.displayName || 'User'}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">{user?.displayName || 'User'}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <Link
                    to="/billing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Billing
                  </Link>
                  <Link
                    to="/help"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Help & Support
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <AuthButton />
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {isHomePage && navItemList.map((item: navItems) =>
              item.active ? (
                <a
                  key={item.name}
                  href={item.slug}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : null
            )}
            
            {!isHomePage && authStatus && (
              <>
                <Link
                  to="/dashboard"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/transactions"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Transactions
                </Link>
                <Link
                  to="/goals"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Goals
                </Link>
                <Link
                  to="/investments"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investments
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
