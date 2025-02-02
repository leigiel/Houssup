import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import HouseDetails from "../pages/Houses/Housedetails";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/allhouses/:id',
                element: <HouseDetails />,
                loader: async ({ params }) => {
                  const response = await fetch(`https://api2-kohl.vercel.app/allhouses/${params.id}`);
                  if (!response.ok) {
                    throw new Error('Failed to fetch house details');
                  }
                  const data = await response.json();
                  console.log(data); // Add this line to check the fetched data
                  return data;
                }
              },
              {
                path:'/register',
                element:<Register></Register>
              },
              {
                path:'/profile',
                element:<Profile></Profile>
              },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;
