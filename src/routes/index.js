import { createBrowserRouter } from 'react-router-dom';
import Login from '~/pages/Login';

const publicRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <div>HOME !</div>,
  },
]);

const privateRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>Private Hello world!</div>,
  },
]);

export { publicRouter, privateRouter };
