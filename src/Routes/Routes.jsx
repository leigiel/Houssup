import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import HouseDetails from "../pages/Houses/Housedetails";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../pages/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
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
                    console.log(data); 
                    return data;
                }
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <ErrorPage />
            },
            {
                path: '/profile',
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            }
        ]
    }
]);

export default router;
