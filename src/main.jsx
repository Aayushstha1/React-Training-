import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import HomePage from './pages/home';
import ReducerHook from './pages/reducerhook';
import LoginPage from './pages/LoginPage';
import LearUseEffect from './pages/learUseEffect';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LearUseEffect/>
   <HomePage/>
    <ReducerHook/>
    <LoginPage/>
  </StrictMode>

);
