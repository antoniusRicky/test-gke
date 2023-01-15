import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ManagePage from './pages/ManagePage';
import Products from './pages/Products';
import Theme from './pages/Theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/landingpage",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/managepage",
    element: <ManagePage />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/theme",
    element: <Theme />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);