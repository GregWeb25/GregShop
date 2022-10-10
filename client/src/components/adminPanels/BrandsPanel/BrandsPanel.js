import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import BrandModal from "../../modals/BrandModal";
import { Context } from "../../..";
import { fetchBrands } from "../../../http/deviceAPI";
import BrandsItem from "./BrandsItem.tsx";
import { IBrand } from "./TypesBrand.ts";

const BrandsPanel = observer(() => {
    const {device} = useContext(Context);
    const [state, updateState] = useState();
    const [brandVisible, setBrandVisible] = useState(false);

    useEffect(()=>{
        fetchBrands().then(data => device.setBrands(data));
    },[state, device.brands])

    return(
        <div className='d-flex flex-column  col-3'>
            <h4>Бренды:</h4>
            <div style={{height: 300, overflowY: 'scroll', overflowX: "visible"}} className="card p-3">
                <button 
                    onClick={()=>{setBrandVisible(true)}} 
                    className="btn btn-outline-primary">
                        Добавить бренд
                </button>
                <BrandModal 
                    onHide={()=>{setBrandVisible(false)}} 
                    show={brandVisible}
                />
                <div className="mt-3">
                    {device.brands.map((brand: IBrand) => {
                    return(
                        <BrandsItem
                            key={brand.id}
                            brand={brand}
                            updateState={updateState}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
    )
})

export default BrandsPanel;