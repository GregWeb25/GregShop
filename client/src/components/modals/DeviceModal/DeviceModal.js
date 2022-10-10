import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import { Context } from "../../../index.js";
import { fetchTypes, fetchBrands, createDevice} from "../../../http/deviceAPI";
import {observer} from 'mobx-react-lite';
import DeviceInfo from './DeviceInfo.js';

const DeviceModal = observer( ({show, onHide}) => {
  const {device} = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(()=>{
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
  }, [])

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    if(name && price !== 0 && file && info !== []){
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', `${price}`);
      formData.append('img', file);
      formData.append('brandId', device.selectedBrand.id);
      formData.append('typeId', device.selectedType.id);
      formData.append('info', JSON.stringify(info));
      createDevice(formData).then(() => onHide());
    } else {
      alert('Заполните все поля!');
    }
  } 

  const addInfo = () =>{
    setInfo([...info, {title: '', description: '', number: Date.now()}]);
  }

    return(
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Создание нового товара</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <Form>
            <Dropdown className="mt-3">
              <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {device.types.map(type => 
                    <Dropdown.Item onClick={()=>device.setSelectedType(type)} key={type.id}>
                      {type.name}
                    </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
              <Dropdown.Toggle>{device.selectedBrand.name  || 'Выберите бренд'}</Dropdown.Toggle>
                <Dropdown.Menu>
                  {device.brands.map(brand => 
                    <Dropdown.Item onClick={()=>device.setSelectedBrand(brand)} key={brand.id}>
                      {brand.name}
                    </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
             value={name}
             onChange={(e)=>{setName(e.target.value)}}
             className='mt-3'
             placeholder='Название устройства'  
             />
            <Form.Control
             value={price}
             onChange={(e)=>{setPrice(Number(e.target.value))}}
             className='mt-3'
             placeholder='Цена'
             type="number"
             />
            <Form.Control
             onChange={selectFile}
             className='mt-3'
             placeholder='Фото'
             type='file'  
            />
             <hr />
             <Button 
             variant='outline-primary'
             onClick={()=>{addInfo()}}
             >Добавить свойство</Button>
             <ul className="list-group mt-3">
                {info.map(descItem => 
                    <DeviceInfo
                      key={descItem.number}
                      descItem={descItem}
                      setInfo={setInfo}
                      info={info}
                    />
                )}
                </ul>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addDevice}>Создать</Button>
        </Modal.Footer>
      </Modal>
    )
})

export default DeviceModal;