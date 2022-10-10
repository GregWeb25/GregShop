import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getAdmins, addAdmin as add } from '../../../http/userAPI';
import Alert from "../../modals/Alert.js"
import AdminsItem from './AdminsItem.tsx';
import { IAdmin } from './TypesAdminPanel';

const AdminsPanel = () => {
    const [admins, setAdmins] = useState<[] | IAdmin[]>([]);
    const [state, updateState] = useState<string>();
    const [email, setEmail] = useState<string>('');
    const [notFound, setNotFound] = useState<boolean>(false);

    const fetchAdmins = async() => {
        await getAdmins().then(data => setAdmins(data));
    }

    const addAdmin = async() => {
        await add(email).then(data => {
            if(data.at(0) == 0){
                setNotFound(true);
            }
            setEmail('');
            updateState('');
        });
    }

    useEffect(()=>{
        fetchAdmins()
    },[state])

    return(        
        <div className='d-flex flex-column  col-3'>
            <h4>Администраторы:</h4>
            <div style={{height: 300, overflowY: 'scroll', overflowX: "visible"}} className="p-3  card">
                <div>
                    <div className='d-flex gap-1'>
                        <Form.Control
                            placeholder="Введите ник"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <Button
                            className="w-25"
                            onClick={()=>addAdmin()}
                        >
                            <i className="bi bi-person-plus"></i>
                        </Button>
                    </div>
                    <div className=" mt-3">
                        {admins.length && admins.map((admin: IAdmin) => {
                        return(
                            <AdminsItem
                                key={admin.id}
                                admin={admin}
                                updateState={updateState}
                            />
                        )})
                        }
                    </div>
                </div>
        <Alert
            show={notFound}
            onHide={()=>setNotFound(false)}
            text={`Пользователь с ником ${email} не существует`}
        />
        </div>
    </div>
    )
}

export default AdminsPanel;