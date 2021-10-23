import React from 'react';
//import "./Confirm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';



function ConfirmModal({ handleDelete, closeModal }) {
  return (
    <Modal.Dialog size="modal-sm">
      <Modal.Header closeButton onClick={closeModal}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleDelete}>Yes</Button>
        <Button variant="danger" onClick={closeModal}>No</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ConfirmModal;