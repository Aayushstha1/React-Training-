import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import HomePage from './pages/home';
import ReducerHook from './pages/reducerhook';
import LoginPage from './pages/LoginPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HomePage/>
    <ReducerHook/>
    <LoginPage/>
  </StrictMode>

);
