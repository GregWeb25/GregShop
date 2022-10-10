import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";


const TypeBar = observer(() => {
    const {device} = useContext(Context);

    return(
        <div>
            <ul className="list-group list-group-flush" >
                    <li
                        onClick={()=>{device.setSelectedType({id: 0, name: 'все'})}}
                        className={device.selectedType.id == 0? 'list-group-item active' : 'list-group-item' }
                        style={{cursor: 'pointer'}}
                    >Все</li>
                {device.types.map(type => 
                    <li key={type.id} 
                        onClick={()=>{device.setSelectedType(type)}}
                        className={type.id === device.selectedType.id ? 'list-group-item active' : 'list-group-item' }
                        style={{cursor: 'pointer'}}
                    >{type.name}</li>)}
            </ul>
        </div>
    )
})

export default TypeBar;