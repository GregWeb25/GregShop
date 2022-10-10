import { observer } from "mobx-react-lite";
import { useContext} from "react";
import { Context } from "..";
import DeviceItem from "./DeviceItem";
import {deleteDevices } from "../http/deviceAPI";

const DeviceList = observer(({updateState}) => {
    const {device} = useContext(Context);

    const deleteDeviceFromServer = async(id)=>{
        await deleteDevices({id}).then(()=>updateState({})).then(()=>{});
    }

    return(
            <div className="row d-flex mt-2">
                {device.devices.map(deviceItem => {
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