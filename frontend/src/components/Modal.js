import React from 'react';
import { Modal,Button} from 'react-bootstrap';
function ObjectModal(props) {
    const {show,handleClose,body}=props
    return (
        <Modal  size="lg" show={show} onHide={handleClose}>
            {body}
        </Modal>
    );
}

export default ObjectModal;