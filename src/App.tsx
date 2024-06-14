import { useEffect } from 'react';
import { Toaster } from 'sonner';
import Routings from '@/router/Routings';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/stores/hook';
import { getMe } from '@/stores/user/userSlice';
import authStorageService from '@/shared/services/authStorage.service';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const accessToken = authStorageService().getToken();

  useEffect(() => {
    !user && accessToken && dispatch(getMe());
  }, [accessToken, dispatch, user]);

  return (
    <Router>
      <Routings />
      <Toaster richColors />
    </Router>
  );
}

export default App;
