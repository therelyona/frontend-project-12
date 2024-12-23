import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useRemoveChannelMutation } from '../../store/api/chatApi';

const RemoveModal = ({ closeModal }) => {
  const [removeChannel] = useRemoveChannelMutation();
  const channel = useSelector((state) => state.modal.channel);
  const handleRemove = async (currentChannel) => {
    try {
      await removeChannel(currentChannel);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Уверены?</p>
        <Form.Group className="d-flex justify-content-end">
          <Button
            type="button"
            className="me-2 btn btn-secondary"
            onClick={closeModal}
          >
            Отменить
          </Button>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => handleRemove(channel)}
          >
            Удалить
          </Button>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveModal;
