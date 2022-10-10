import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../..";
import { fetchTypes } from "../../../http/deviceAPI";
import TypeModal from "../../modals/TypeModal";
import TypesItem from "./TypesItem";

const TypesPanel = observer(() => {
    const {device} = useContext(Context);
    const [state, updateState] = useState();
    const [typeVisible, setTypeVisible] = useState(false);

    useEffect(()=>{
        fetchTypes().then(data => device.setTypes(data));
    },[state,  device.types])

    return(
        <div className='d-flex flex-column  col-3'>
            <h4>Типы:</h4>
            <div style={{height: 300, overflowY: 'scroll', overflowX: "visible"}} className=" card p-3">
                <button onClick={()=>{setTypeVisible(true)}} className="btn btn-outline-primary">Добавить тип</button>
                <TypeModal onHide={()=>{setTypeVisible(false)}} show={typeVisible}/>
                <div className="mt-3">
                {device.types.map(type => {
                    return(
                        <TypesItem
                            key={type.id}
                            type={type}
                            updateState={updateState}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
    )
})

export default TypesPanel;