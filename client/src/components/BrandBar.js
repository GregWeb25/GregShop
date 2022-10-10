import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";


const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return(
            <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                    <div
                            onClick={()=>{device.setSelectedBrand({})}}
                            className={!Object.keys(device.selectedBrand).length ? " me-1 p-2 btn btn-outline-primary mb-2 active" : " p-2  btn btn-outline-secondary mb-2 me-1" }
                            style={{cursor: 'pointer'}}
                    >Все</div>
                    {device.brands.map(brand => 
                        <div key={brand.id} 
                            onClick={()=>{device.setSelectedBrand(brand)}}
                            className={brand.id === device.selectedBrand.id ? " me-1 p-2 btn btn-outline-primary mb-2 active" : " p-2  btn btn-outline-secondary mb-2 me-1" }
                            style={{cursor: 'pointer'}}
                    >{brand.name}</div>)}
                </div>
            </div>   
    )
})

export default BrandBar;