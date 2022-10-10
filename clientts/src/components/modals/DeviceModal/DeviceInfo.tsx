import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IDeviceInfoProps } from './TypesDeviceModal';

const DeviceInfo = ({info, setInfo, descItem}: IDeviceInfoProps) => {

    const changeInfo = (key: string, value: string, number: number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const removeInfo = (number: number) =>{
        setInfo(info.filter(i => i.number!==number));
    }

    return(
        <div key={descItem.number} className="list-group-item">
            <div className="row">
                <div className="col-4">
                    <Form.Control
                        value={descItem.title}
                        onChange={(e)=>changeInfo('title', e.target.value, descItem.number)}
                        placeholder='Название'  
                    />
                    </div>
                    <div className="col-6">
                    <Form.Control
                        value={descItem.description}
                        onChange={(e)=>changeInfo('description', e.target.value, descItem.number)}
                        placeholder='описание'  
                    />
                    </div>
                    <div className="col-2 d-flex">
                    <Button
                        onClick={()=>{removeInfo(descItem.number)}}
                        variant="outline-danger">
                        <i className="bi bi-x-lg"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DeviceInfo;