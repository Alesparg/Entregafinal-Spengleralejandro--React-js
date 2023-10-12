import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { CartPage, HomePages, ItemDetailPage, CheackoutPage } from '../pages/Index'

const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePages />
        },
        {
            path: '/item/:idProduct',
            element: <ItemDetailPage />
        },
        {
            path: '/checkout',
            element: <CheackoutPage />

        },
        {
            path:'/cart',
            element: <CartPage />
        }
     ])

     return (
        <RouterProvider router={routes} />
     )
}

export default Navigation




