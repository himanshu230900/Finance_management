import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/index';
import { useNavigate } from 'react-router-dom';
import ProtectedLoader from './ProtectedLoader';
import { setIsProtectedLoader } from '../../../store/loadSlice';
import { ReactNode } from 'react';

export default function Protected({
  children,
  authentication = true,
}: {
  children: ReactNode;
  authentication?: boolean;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get loader and auth status from Redux store
  const loader = useSelector((state: RootState) => state.load.isProtectedLoader);
  const authStatus = useSelector((state: RootState) => state.auth.status);

  useEffect(() => {
    // Ensure that the loader is set to false when the component mounts
    dispatch(setIsProtectedLoader(false));
    
    // Handle authentication logic
    if (authentication && !authStatus) {
      navigate('/login');
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    }
  }, [authStatus, authentication, navigate, dispatch]);

  return loader ? <ProtectedLoader /> : <>{children}</>;
}
