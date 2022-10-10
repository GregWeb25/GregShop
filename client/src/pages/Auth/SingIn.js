import Alert from "../../components/modals/Alert";
import { useState, useContext, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { login, registration } from '../../http/userAPI';
import { Context } from "../..";
import {observer} from 'mobx-react-lite';

const SingIn = observer(({isLogin, userData, clickHandler, setClickHandler}) => {
    const {user} = useContext(Context);
    const {password, email, confirm} = userData;
    const [alertInvalidPasswordVisible, setAlertInvalidPasswordVisible] = useState(false);
    const [alertInvalidUserVisible, setAlertInvalidUserVisible] = useState(false);
    const [alertInvalidConfirmVisible, setAlertInvalidConfirmVisible] = useState(false);
    const navigate = useNavigate();

    const sing = useCallback( async() => {
        try{
            let data;
            if (isLogin) {
                data = await login(email, password);
                navigate(SHOP_ROUTE);
            } else {
                if(confirm === password){
                    data = await registration(email, password);
                    navigate(SHOP_ROUTE);
                } else {
                    setAlertInvalidConfirmVisible(true);
                    return null
                }
            }
            user.setUser(data);
            user.setIsAuth(true);
        } catch (e) {
            const err = e.response.data.message;
            if(err == "User do not exist"){
                setAlertInvalidUserVisible(true);
            }
            if(err == "Invalid password"){
                setAlertInvalidPasswordVisible(true);
            }
        } finally {
            setClickHandler(false);
        }
    },[userData])

    if(clickHandler){
        sing();
    }

    return(
        <div>
            <Alert 
                text={`Неверный пароль!`} 
                onHide={()=>{setAlertInvalidPasswordVisible(false)}} 
                show={alertInvalidPasswordVisible}/>
            <Alert 
                text={`Пользователя с таким логином не существует!`} 
                onHide={()=>{setAlertInvalidUserVisible(false)}} 
                show={alertInvalidUserVisible}/>
            <Alert 
                text={"убедитесь, что пароль и подтверждение совпадают!"} 
                onHide={()=>{setAlertInvalidConfirmVisible(false)}} 
                show={alertInvalidConfirmVisible}/>
        </div>
    )
})

export default SingIn;