import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from '../pages/error'
import Country from '../pages/country'
import HomePage from '../pages/Home'

import AppLayout from '../layouts/AppLayout'
import { getCountries } from '../services/country'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, 
                element: <HomePage />,
                loader: getCountries
            },
            {
                path: "/country",
                element: <Country />,
            }
        ]
    },
    
])


export default router