import Confirming from "../../modals/Confirming";
import { Button } from 'react-bootstrap';
import { deleteType } from "../../../http/deviceAPI";
import { useState } from "react";

const TypesItem = ({type, updateState}) => {
    const [confirming, setConfirming] = useState(false);
    return(
        <div 
            key={type.id} 
            className=" mb-1 d-flex justify-content-between align-items-center">
            <h6>{type.name}</h6>
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
                    deleteType(type.id).then(()=>updateState({}));
                    setConfirming(false);
                }}
                text={'Вы уверены, что хотите удалить тип ' + type.name + "?"}
            />
        </div>
    )
}

export default TypesItem;