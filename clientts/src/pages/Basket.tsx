import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../index"
import BasketDeviceItem from "../components/BasketDeviceItem";
import { getBasketId, getBasketDevices, deleteBasketDevices } from "../http/basketAPI";
import { observer } from "mobx-react-lite";
import calculateCost from "../utils/calculateCost";
import { IBascetDevice } from "../components/types/TypesComponents";

const Basket = observer(() => {
    const {user, basket} = useContext(Context);
    const [basketContent, setBasketContent] = useState<IBascetDevice[] | null>(null);
    const [cost, setCost] = useState<number>(0);

    const fetchBasket = useCallback( async()=>{
        if(user.isAuth){
          basket.setBasketId(await getBasketId({userId: user.user.id}));
          const devResp = await getBasketDevices({basketId: basket.basketId});
          basket.setBasketDevices(devResp);
          setBasketContent(basket.basketDevices);
          
        }
    },[])

    const deleteDeviceFromServer = async(id: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.stopPropagation();
        console.log(await deleteBasketDevices({basketId: basket.basketId, id: id}));
        fetchBasket();
    }

    useEffect(()=>{
        fetchBasket();
    },[])

    useEffect(()=>{
        setCost(calculateCost(basketContent));
    },[basketContent])

    return (
        <div className="container h-100 ">
            <div className="row mt-4"><h2>Корзина {user.user.email}:</h2></div>
            <div className="container mt-4">
                {!basketContent &&
                <div className='d-flex justify-content-center align-items-center' >
                    <h1 className='mt-5 mb-5'>Корзина пуста!</h1>
                </div>
                }
                {basketContent &&
                <div className='d-flex justify-content-center align-items-center flex-wrap gap-1' >

                        {basketContent.map((device: IBascetDevice) => 
                            <BasketDeviceItem 
                                key={device.id} 
                                deleteFunction={deleteDeviceFromServer} 
                                device={device}
                            />  
                        )}

                </div>
                }
            </div>
            <div className="row d-flex justify-content-around mt-4 mb-5">
                <h2  className='col-8'>Общая цена: {cost} руб.</h2>
                <button className='btn btn-success col-2' >Оплатить</button>
            </div>
        </div>
    )
})

export default Basket;