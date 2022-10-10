import Admin from './pages/Admin'
import Auth from './pages/Auth/Auth'
import Shop from './pages/Shop'
import DevicePage from './pages/DevicePage/DevicePage'
import Basket from './pages/Basket'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_PAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts.js'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>,
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>,
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>,
    },
    {
        path: DEVICE_PAGE_ROUTE + '/:id',
        Component: <DevicePage/>,
    }
];

export  const publickRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>,
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>,
    },
    {
        path: DEVICE_PAGE_ROUTE + '/:id',
        Component: <DevicePage/>,
    }
];