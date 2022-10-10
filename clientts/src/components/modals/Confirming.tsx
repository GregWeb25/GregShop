import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IConfirmingProps } from './TypesModals';

const Confirming = ({show, onHide, text, callback}: IConfirmingProps) => {

    return(
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
        </Modal.Header>
  
        <Modal.Body>
          <h5>
            {text}
          </h5>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={callback}>Подтвердить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Confirming;