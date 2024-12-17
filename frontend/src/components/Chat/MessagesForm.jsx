import { Form } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import MessageButtonInput from './MessageButtonInput';

const MessagesForm = ({
  channelId, addMessage, username, isLoading,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: async (body, { setFieldValue }) => {
      try {
        const newMessage = { body, channelId, username };
        await addMessage(newMessage);
        setFieldValue('body', '');
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form
      onSubmit={formik.handleSubmit}
      noValidate
      className="py-1 border rounded-2"
    >
      <div className="input-group has-validation">
        <Form.Control
          required
          id="body"
          name="body"
          aria-label="Новое сообщение"
          placeholder="Введите сообщение..."
          wfd-id="id0"
          className="border-0 p-0 ps-2 form-control"
          value={formik.values.body}
          ref={inputRef}
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          className="btn btn-group-vertical"
          disabled={isLoading}
        >
          <MessageButtonInput />
          <span className="visually-hidden">Отправить</span>
        </button>
      </div>
    </Form>
  );
};

export default MessagesForm;
