import Admin from './pages/Admin.js'
import Auth from './pages/Auth/Auth.js'
import Shop from './pages/Shop.js'
import DevicePage from './pages/DevicePage/DevicePage.js'
import Basket from './pages/Basket.js'
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