import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice,  createRating } from "../../http/deviceAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import Alert from "../../components/modals/Alert";
import StarRating from "./StarRating";
import Comments from "../../components/comments/Comments";
import getBrandByID from "../../utils/getBrandById";
import BuyPanel from "./BuyPanel";
import InfoItem from "./InfoItem";
import checkRating from "../../utils/checkRating";
import Loading from "../../components/Loading";
import { IDevice } from "../../components/comments/types/TypesComents";
import { IInfo } from "../../components/modals/DeviceModal/TypesDeviceModal";

const DevicePage = observer(() => {
    const [alertRatingVisible, setAlertRatingVisible] = useState<boolean>(false);
    const { user, device: devices} = useContext(Context);
    const [ brand, setBrand ] = useState<string>('Null');
    const [device, setDevice] = useState<IDevice>({    
        id: 0,
        name: '',
        price: 0,
        rating: 0,
        typeId: 0,
        brandId: 0,
        img: '',
        info: [],
    });
    const [rate, setRate] = useState<number>(0);
    const {id} = useParams();
    const [loading, setLoading] = useState<boolean>(true);

    let infoCount: number = 0;

    const addRating = async() => {
        await createRating({userId: user.user.id, deviceId: id, rate: rate});
        setAlertRatingVisible(true);
    }

    useEffect(()=>{
        fetchOneDevice(id)
            .then(data => setDevice(data))
            .then(async() =>  setRate(await checkRating(user, id)))
            .then(()=>setLoading(false));
    },[])

    useEffect(()=>{
        setBrand( getBrandByID(device!.brandId, devices.brands));
    },[device])

    if(loading){
        return(
           <Loading/>
        )
    }

    return (
        <div className="container mt-2">
            <div className="row mt-4 mb-4">
                <NavLink to='/'>Назад</NavLink>
            </div>
            <div className="row">
                <div className="col-8 d-flex align-items-center justify-content-around ">
                    <img width={300}  src={'http://localhost:5000/' + device!.img} alt="" />
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="h-100 mt-auto">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1>{brand} <span className="text-nowrap">{device!.name}</span></h1>
                            </div>
                            <div style={{fontSize: 28}} className="d-flex h-75 align-items-center justify-content-center">
                            <span>Оценка: </span>
                                <div className="d-flex w-25 align-items-center justify-content-center">
                                    <span>
                                        {device!.rating}
                                    </span>
                                    <i className="bi bi-star"></i>
                                </div>
                            </div>
                            {user.isAuth &&
                                <StarRating
                                    size={36} 
                                    count={5} 
                                    rating={rate} 
                                    onRating={(rate: number) => setRate(rate)}
                                    addRating={addRating}
                                />

                            }
                        </div>
                    </div>
                    <BuyPanel id={Number(id)} device={device} />
                </div>
            </div>
            <div className=" mt-4">
                <h2>Характеристики:</h2>
                <ul className="list-group">
                {device!.info.map((descItem: IInfo) => {
                    infoCount++
                    return(
                    <InfoItem descItem={descItem} infoCount={infoCount} />
                        )
                })}
                </ul>
            </div>
            <h2 className='mt-4'>Комментарии:</h2>
            <Comments device={device}/>
            <Alert 
                text={`Оценка отправлена.`} 
                onHide={()=>{setAlertRatingVisible(false)}} 
                show={alertRatingVisible}
            />
        </div>
    )
})

export default DevicePage;