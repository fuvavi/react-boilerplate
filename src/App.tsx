import { useEffect } from 'react';
import { Toaster } from 'sonner';
import Routings from '@/router/Routings';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppDispatch } from '@/stores/hook';
import { getMe } from '@/stores/user/userSlice';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <Router>
      <Routings />
      <Toaster richColors />
    </Router>
  );
}

export default App;
