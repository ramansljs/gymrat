import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Program from '../components/Program';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'program',
    element: <Program />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
