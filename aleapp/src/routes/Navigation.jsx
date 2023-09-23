import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { HomePages, ItemDetailPage, CheackoutPage } from '../pages/Index'

const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePages />
        },
        {
            path: '/product/:idproduct',
            element: <ItemDetailPage />
        },
        {
            path: '/checkout',
            element: <CheackoutPage />

        }
     ])

     return (
        <RouterProvider router={routes} />
     )
}

export default Navigation



