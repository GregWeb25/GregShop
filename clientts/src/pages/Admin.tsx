import DeviceModal from "../components/modals/DeviceModal/DeviceModal";
import { useState } from "react";
import TypesPanel from "../components/adminPanels/TypesPanel/TypesPanel";
import BrandsPanel from "../components/adminPanels/BrandsPanel/BrandsPanel";
import AdminsPanel from "../components/adminPanels/AdminsPanel/AdminsPanel";

const Admin = () => {
    const [deviceVisible, setDeviceVisible] = useState<boolean>(false);
    return (
        <div className="container d-flex flex-column mt-3 gap-3">
            <button onClick={()=>{setDeviceVisible(true)}} className="btn btn-outline-primary">Добавить товар</button>
            <DeviceModal onHide={()=>{setDeviceVisible(false)}} show={deviceVisible}/>
            <div className="container d-flex align-items-start justify-content-center mt-3 gap-3">
                <TypesPanel/>
                <BrandsPanel/>
                <AdminsPanel/>
            </div>
        </div>
    )
}

export default Admin;