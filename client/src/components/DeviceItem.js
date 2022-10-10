import "bootstrap-icons/font/bootstrap-icons.css";
import {useNavigate} from "react-router-dom";
import { DEVICE_PAGE_ROUTE } from "../utils/consts";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import Confirming from "./modals/Confirming";
import getTypeByID from "../utils/getTypeById";
import getBrandByID from "../utils/getBrandById";

const DeviceItem = observer(({device, deleteFunction}) => {
    const {device: devices, user} = useContext(Context);
    const [confirming, setConfirming] = useState(false)
    const [ brand, setBrand ] = useState('');
    const [ type, setType ] = useState('');
    const navigate = useNavigate();

    const deleteConfirming = (e) =>{
        e.stopPropagation();
        setConfirming(true);
    }

    useEffect(()=>{
        setBrand( getBrandByID(device.brandId, devices.brands));
        setType(getTypeByID(device.typeId,  devices.types));
    },[])

    return(
            <div style={{fontSize: 16}} className="card col-lg-3 col-sm-4 col-xs-6" onClick={()=>{
                if(!confirming){
                    navigate(DEVICE_PAGE_ROUTE + '/' + device.id);
                }
                }}>
                {user.user.role == "ADMIN" &&
                    <button className="btn-close position-absolute " style={{right: 10, top: 10, cursor:'pointer'}}  type="button" onClick={(e)=>deleteConfirming(e)} aria-label="Close"></button>
                }
                <div className="h-50 mt-2">
                    <img src={'http://localhost:5000/' + device.img} className="card-img-top m-auto" style={{
                        display: 'block',
                        width: "auto",
                        height: 100
                    }} alt="..."/> 
                </div>
                <div style={{paddingLeft: 5, paddingRight: 5}} className="card-body">
                    <div className="mt-1">
                        <div className="row">
                            <h6 className="card-title" style={{textAlign:'justify'}}>{type} {brand}</h6>
                            <h6 className="card-title" style={{textAlign:'justify'}}>{device.name}</h6>
                        </div>
                    </div>
                    <div className="">Цена: {device.price} ₽</div>
                    <div>{device.rating} <i className="bi bi-star"></i></div>
                </div>
                <Confirming
                    onHide={()=>setConfirming(false)}
                    show={confirming}
                    callback={()=> deleteFunction(device.id)}
                    text="Вы уверены, что хотите удалить товар?"
                />
            </div>
    )
})

export default DeviceItem;