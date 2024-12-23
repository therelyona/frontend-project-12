import { Button, Form, Modal } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useAddChannelMutation, useGetChannelsQuery } from '../../store/api/chatApi';
import channelNamesShema from '../../utils/validate';
import { setActiveChannel } from '../../store/slices/activeChannelSlice';

const AddModal = ({ closeModal }) => {
  const [addChannel] = useAddChannelMutation();
  const { data: channels } = useGetChannelsQuery();
  const channelNames = channels?.map((channel) => channel.name);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: channelNamesShema(channelNames),
    onSubmit: async ({ name }) => {
      try {
        const newChannel = await addChannel({ name });
        dispatch(setActiveChannel(newChannel.data));
        closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              name="name"
              id="name"
              className="mb-2"
              ref={inputRef}
              value={formik.values.name}
              onChange={formik.handleChange}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Label
              className="visually-hidden"
              htmlFor="name"
            >
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
              <Button variant="primary" type="submit">
                Отправить
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddModal;
