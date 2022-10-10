import Confirming from "../../modals/Confirming";
import { Button } from 'react-bootstrap';
import { deleteBrand } from "../../../http/deviceAPI";
import { useState } from "react";
import { IBrandItemProps } from "./TypesBrand";

const BrandsItem = ({brand, updateState}: IBrandItemProps) => {
    const [confirming, setConfirming] = useState<boolean>(false);
    return(
        <div key={brand.id} className="mb-1 d-flex justify-content-between align-items-center">
            <h6>{brand.name}</h6>
            <Button
                onClick={()=>{
                    setConfirming(true);
                }}
                variant="danger"
            > Удалить </Button>
            <Confirming
                show={confirming}
                onHide={()=>setConfirming(false)}
                callback={()=>{
                    deleteBrand(brand.id).then(()=>updateState(''));
                    setConfirming(false);
                }}
                text={'Вы уверены, что хотите удалить бренд ' + brand.name + "?"}
            />
        </div>
    )
}

export default BrandsItem;