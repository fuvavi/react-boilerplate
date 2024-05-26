import { ToastContainer } from 'react-toastify';
import Routings from '@/router/Routings';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routings />
      <ToastContainer />
    </Router>
  );
}

export default App;
