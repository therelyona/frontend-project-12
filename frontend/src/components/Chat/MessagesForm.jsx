import { Form } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import MessageButtonInput from './MessageButtonInput';

const MessagesForm = ({
  channelId, addMessage, username, isLoading, t,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [channelId]);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: async (body, { setFieldValue }) => {
      try {
        const newMessage = { body, channelId, username };
        await addMessage(newMessage);
        setFieldValue('body', '');
        inputRef.current.focus();
      } catch (error) {
        console.log(error);
        if (error.message === 'Network Error') {
          toast.error(t('toastify.error.connectionError'));
        } else {
          toast.error(t('toastify.error.error'));
        }
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
          aria-label={t('messagasForm.label')}
          placeholder={t('messagasForm.placeholder')}
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
          <span className="visually-hidden">{t('messagasForm.submitButton')}</span>
        </button>
      </div>
    </Form>
  );
};

export default MessagesForm;
