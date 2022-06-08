
import { FC } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

interface Props {
  show: boolean,
  onHide: () => void,
  heading: string,
  body: string,
}
const ModalOk: FC<Props> = ({ show, onHide, heading, body }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalOk;
