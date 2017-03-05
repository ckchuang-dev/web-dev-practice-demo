import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';

const PokemonModal = ({openModal, closeModal, showModal, pokemon}) => {
  return (
    <div>
      <Button
          bsStyle="primary"
          bsSize="large"
          onClick={openModal}
        >
          Click to show modal
        </Button>

        <Modal
          show={showModal}
          onHide={closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Pokemon Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Show modal success!
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}


export default PokemonModal;
