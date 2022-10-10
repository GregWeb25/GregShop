import "bootstrap-icons/font/bootstrap-icons.css";
import {useNavigate} from "react-router-dom";
import { DEVICE_PAGE_ROUTE } from "../utils/consts";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import getTypeByID from "../utils/getTypeById";
import getBrandByID from "../utils/getBrandById";
import { IBasketDeviceItemProps } from "./types/TypesComponents";

const BasketDeviceItem = observer(({device, deleteFunction}: IBasketDeviceItemProps) => {
    const {device: devices} = useContext(Context);
    const [ brand, setBrand ] = useState('');
    const [ type, setType ] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setBrand( getBrandByID(device.device.brandId, devices.brands));
        setType(getTypeByID(device.device.typeId,  devices.types));
    },[])

    return(
            <div style={{fontSize: 16}} className="card col-lg-3 col-sm-4 col-xs-6" onClick={()=>{navigate(DEVICE_PAGE_ROUTE + '/' + device.device.id)}}>
                    <button className="btn-close position-absolute " style={{right: 10, top: 10, cursor:'pointer'}}  type="button" onClick={(e)=>deleteFunction(device.id, e)}aria-label="Close"></button>
                <div className="h-50 mt-2">
                    <img src={'http://localhost:5000/' + device.device.img} className="card-img-top m-auto" style={{
                        display: 'block',
                        width: "auto",
                        height: 100
                    }} alt="..."/> 
                </div>
                <div style={{paddingLeft: 20, paddingRight: 20}} className="card-body">
                    <div className="mt-1">
                        <div className="row">
                            <h6 className="card-title" style={{textAlign:'justify'}}>{type} {brand}</h6>
                            <h6 className="card-title" style={{textAlign:'justify'}}>{device.device.name}</h6>
                        </div>
                    </div>
                    <div className="">Цена: {device.device.price} ₽</div>
                    <div>{device.device.rating} <i className="bi bi-star"></i></div>
                </div>
            </div>
    )
})

export default BasketDeviceItem;