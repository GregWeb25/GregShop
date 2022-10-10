import DeviceList from "../components/DeviceList";
import {observer} from 'mobx-react-lite';
import { useContext, useEffect, useState, useCallback} from "react";
import { Context } from "..";
import { fetchTypes, fetchBrands, fetchDevices} from "../http/deviceAPI";
import Pages from "../components/Pages";
import FilterAccordion from "../components/FilterAccordion";
import sorts from "../utils/sorts.js";
import { IDevice } from "../components/comments/types/TypesComents";

const Shop = observer(() => {
    const {device, sort} = useContext(Context);
    const [state, updateState] = useState<string>();

    const calculatePages = useCallback(() => {
        const devicePage = device.page | 0;
        const deviceLimit = device.limit | 0;
        let pageDevices = JSON.parse(JSON.stringify(device.devices));
        let currentCount = (devicePage -1) * deviceLimit+0;
        pageDevices = pageDevices.slice(currentCount, currentCount + device.limit );
        return pageDevices;
    },[device.page])

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices(
                device.selectedType.id == 0 ? null : device.selectedType.id, 
                device.selectedBrand.id == 0 ? null : device.selectedBrand.id, 
                device.page,
                device.limit,
                sort.priceFilter.min,
                sort.priceFilter.max
        ).then(data =>{ 
            sorts(data, sort.sort)
            device.setDevices(data);
            device.setTotalCount(data.length | 0);  
        }).then(()=>{
            device.setDevices(calculatePages())
        })
    }, [sort.priceFilter, device.selectedType, device.selectedBrand, device.page, sort.sort, state]);

    return (
        <div className="container mt-2">
            <div className=" mt-2 row">
                <div className="col-3  ">
                    <FilterAccordion/>
                </div>
                <div className="col-9 ">
                    <div className="row">
                        {!device?.devices &&
                            <div className="d-flex align-items-center justify-content-center">
                                <h1>товары не найдены</h1>
                            </div>
                        }
                        <DeviceList updateState={updateState}/>
                        <Pages/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Shop;