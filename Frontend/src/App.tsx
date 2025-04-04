import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticating } from '../src/store/loadSlice';
import { login, logout } from './modules/auth/store/authSlice';
import { setUser } from './modules/user/store/userSlice';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './modules/firebase';
import { RootState } from './store';
import { NavBar } from './components/common';
import { Outlet } from 'react-router-dom';

function App(): React.ReactNode {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => state.load.isAuthenticating
  );

  useEffect(() => {
    const checkAuthState = () => {
      dispatch(setIsAuthenticating(true));
      const unSubscribe = onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          dispatch(login());
          dispatch(setUser(user));
        } else {
          dispatch(logout());
          dispatch(setUser(null));
        }
        dispatch(setIsAuthenticating(false));
      });
      return () => unSubscribe();
    };

    checkAuthState();
  }, [dispatch]);

  return !loading ? (
    <div className="flex flex-col min-h-screen w-full items-center bg-gradient-to-b from-white to-blue-300">
      <div className="flex flex-col w-full max-w-7xl mx-auto justify-center">
        {/* <NavBar />
        <Outlet /> Renders child routes */}
        {/* Fixed Navbar */}
        <div className="sticky top-0 w-full shadow-b-md z-50 mx-auto h-[4rem] ">
          <NavBar />
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-col w-full max-w-7xl mx-auto px-4 pt-[4rem] overflow-auto scrollbar-hide h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : null;
}

export default App;
