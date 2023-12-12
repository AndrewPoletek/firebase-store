import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from "./routes/MainLayout/MainLayout.route";
import Authentication from "./routes/authentication/Authentication.route";
import Categories from "./routes/categories/Categories.route";
import Home from "./routes/Home/Home.route";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/auth",
          element: <Authentication />
        },
        {
          path:"/categories",
          element: <Categories />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
