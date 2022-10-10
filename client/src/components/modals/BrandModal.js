import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createBrand } from '../../http/deviceAPI';

const BrandModal = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
      createBrand({name: value}).then(data => setValue(''));
      onHide();
    }

    return(
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Создание нового бренда</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <Form>
            <Form.Control
              value ={ value }
              onChange = {(e)=>{setValue(e.target.value)}}
              placeholder={"Введите название нового бренда"}
            />
          </Form>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={()=>{addBrand()}}>Создать</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default BrandModal;