import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Dropdown } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class ModalComp extends React.Component {
  render() {
    return (
      <div>
        Test div
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ModalComp />,
  document.getElementById('root')
);

