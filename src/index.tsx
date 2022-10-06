import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage, {loader as homeLoader} from './pages/HomePage/HomePage';
import ExchangePage, {loader as exchangeLoader} from './pages/ExchangePage/ExchangePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: homeLoader
  },
  {
    path: "/exchange/:exchangeId",
    element: <ExchangePage />,
    loader: exchangeLoader
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);