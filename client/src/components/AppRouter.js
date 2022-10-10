import { useContext} from "react";
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { Context } from "..";
import {observer} from 'mobx-react-lite';
import { authRoutes, publickRoutes } from "../routes";

const AppRouter = observer( () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}
            {!user.isAuth && publickRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}
            <Route
            path="*"
            element={<Navigate to="/" replace />}
            />
        </Routes>
    )
})

export default AppRouter;