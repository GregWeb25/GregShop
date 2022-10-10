import { observer } from "mobx-react-lite";
import { useContext} from "react";
import { Context } from "..";
import DeviceItem from "./DeviceItem";
import {deleteDevices } from "../http/deviceAPI";
import { IDeviceListProps } from "./types/TypesComponents";
import { IDevice } from "./comments/types/TypesComents";

const DeviceList = observer(({updateState}: IDeviceListProps) => {
    const {device} = useContext(Context);

    const deleteDeviceFromServer = async(id: number)=>{
        await deleteDevices({id}).then(()=>updateState('')).then(()=>{});
    }
    return(
            <div className="row d-flex mt-2">
                {device.devices.map((deviceItem: IDevice ) => {
                    return(
                        <DeviceItem 
                        key={deviceItem.id} 
                        device={deviceItem} 
                        deleteFunction={deleteDeviceFromServer}
                        /> 
                    )
                })}
            </div>
    )
})

export default DeviceList;