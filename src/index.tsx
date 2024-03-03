import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
