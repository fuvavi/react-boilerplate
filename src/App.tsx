import { Toaster } from 'sonner';
import Routings from '@/router/Routings';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routings />
      <Toaster richColors />
    </Router>
  );
}

export default App;
