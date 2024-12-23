import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useRenameChannelMutation, useGetChannelsQuery } from '../../store/api/chatApi';
import channelNamesShema from '../../utils/validate';

const RenameModal = ({ closeModal }) => {
  const channel = useSelector((state) => state.modal.channel);
  const { data: channels } = useGetChannelsQuery();
  const [renameChannel] = useRenameChannelMutation();
  const channelNames = channels?.map((c) => c.name);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: channel.name,
    },
    validationSchema: channelNamesShema(channelNames),
    onSubmit: async ({ name }) => {
      const updatedChannel = {
        id: channel.id,
        name,
      };
      try {
        await renameChannel(updatedChannel);
        closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Переименовать канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="name"
              id="name"
              className="mb-2"
              isInvalid={formik.touched.name && formik.errors.name}
              ref={inputRef}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Form.Label className="visually-hidden" htmlFor="name">
              Имя канала
            </Form.Label>
            {formik.touched.name && formik.errors.name && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            )}
            <div className="d-flex justify-content-end">
              <Button
                type="button"
                variant="secondary"
                className="me-2"
                onClick={closeModal}
              >
                Отменить
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="me-2"
              >
                Отправить
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameModal;
