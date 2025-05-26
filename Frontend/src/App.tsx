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
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-white to-blue-300">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <NavBar />
        
        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
}

export default App;
