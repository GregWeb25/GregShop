import Confirming from "../../components/modals/Confirming";
import Alert from "../../components/modals/Alert";
import { observer } from "mobx-react-lite";
import { useState, useContext } from 'react';
import { Context } from "../..";
import { getBasketId, createBasketDevice } from "../../http/basketAPI";

const BuyPanel = observer(({id, device}) => {
    const {basket, user} = useContext(Context);
    const [confirmingVisible, setConfirmingVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertNotAuthVisible, setAlertNotAuthVisible] = useState(false);

    const addToBasket = async() => {
        if (user.isAuth) {
            if(!basket.basketId){
                basket.setBasketId(await getBasketId({userId: user.user.id}));
            } 
            await createBasketDevice({basketId: basket.basketId, deviceId: id}).then(()=>setAlertVisible(true));
            setConfirmingVisible(false);

        } else {
            setAlertNotAuthVisible(true);
        }
    }

    return(
    <div className="row mt-2">
        <div className="card h-100 d-flex align-items-center gap-3 justify-content-around pb-2">
            <h2>Цена: {device.price}₽</h2>
            <div onClick={()=>{setConfirmingVisible(true)}} className="btn btn-success">
                В корзину
            </div>
            <Confirming callback={()=>addToBasket()} text={`Вы уверены, что хотите добавить в корзину ${device.name}?`} onHide={()=>{setConfirmingVisible(false)}} show={confirmingVisible}/>
            <Alert 
                text={`Вы добавили в корзину ${device.name}!`} 
                onHide={()=>{setAlertVisible(false)}} 
                show={alertVisible}
            />
            <Alert 
                text={`Войдите, чтобы добавить товар в корзину!`} 
                onHide={()=>{setAlertNotAuthVisible(false)}} 
                show={alertNotAuthVisible}
            />
        </div>
    </div>
    )
})

export default BuyPanel;