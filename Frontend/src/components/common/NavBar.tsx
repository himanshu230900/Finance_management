import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../../store';
import { navItemList } from '../../data/nav';
import { navItems } from '../../types/navItem';
import AuthButton from '../auth/AuthButton';

const NavBar: React.FC = () => {
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // console.log('Current pathname:', location.pathname); // Debugging line
  return (
    <div className="items-center justify-center py-2 max-w-7xl bg-white">
      <nav className="flex justify-between items-center px-4">
        <div className="text-xl font-bold">
          <Link to="/">Fint</Link>
        </div>
        <ul className="flex space-x-4 xl:space-x-8">
          {isHomePage &&
            navItemList.map((item: navItems) =>
              item.active ? (
                <li key={item.name}>
                  <a href={item.slug} className="hover:text-blue-600">
                    {item.name}
                  </a>
                </li>
              ) : null
            )}
        </ul>
        {authStatus ? (
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        ) : (
          <AuthButton />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
