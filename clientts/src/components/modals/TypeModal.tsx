import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createType } from '../../http/deviceAPI';
import { IModalProps } from './TypesModals';

const TypeModal = ({show, onHide}: IModalProps) => {
    const [value, setValue] = useState<string>('');

    const addType = () => {
      createType({name: value}).then(() => setValue(''));
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
          <Modal.Title>Создание нового типа</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <Form>
            <Form.Control
                value ={ value }
                onChange = {(e)=>{setValue(e.target.value)}}
                placeholder={"Введите название нового типа"}
            />
          </Form>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={()=>{addType()}}>Создать</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default TypeModal;