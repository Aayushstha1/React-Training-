import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import HomePage from './pages/home';
import ReducerHook from './pages/reducerhook';
import LoginPage from './pages/LoginPage';
import LearUseEffect from './pages/learUseEffect';
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <AppRoutes/>
    </BrowserRouter>


    {/* <LearUseEffect/>
   <HomePage/>
    <ReducerHook/>
    <LoginPage/> */}


  </StrictMode>

);
