import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);