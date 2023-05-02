import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './components/pages/Error';
import Photogallery from './components/pages/Photogallery';
import Favourites from './components/pages/Favourites';
import RootLayout from './components/pages/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Photogallery /> },
        {
          path: 'favourites',
          element: <Favourites />
        }
      ],
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App
