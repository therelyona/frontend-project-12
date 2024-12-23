import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import routes from '../../utils/routes';
import { useLoginMutation } from '../../store/api/chatApi';

const LoginForm = () => {
  const [authFailed, setAuthFailed] = useState(false);
  const [login] = useLoginMutation();
  const auth = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const res = await login(values).unwrap();
        auth.logIn(res.token, values.username);
        navigate(routes.mainPagePath());
      } catch (err) {
        formik.setSubmitting(false);
        if (err.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
        }
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="col-12 col-md-6 mt-3 mt-md-0"
    >
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          name="username"
          autoComplete="username"
          required
          placeholder="Ваш ник"
          id="username"
          ref={inputRef}
          isInvalid={authFailed}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="username">Ваш ник</Form.Label>
      </Form.Group>
      <Form.Group className="form-floating mb-4">
        <Form.Control
          name="password"
          autoComplete="current-password"
          required
          placeholder="Пароль"
          type="password"
          id="password"
          className="form-control"
          isInvalid={authFailed}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="password">Пароль</Form.Label>
        <Form.Control.Feedback type="invalid" tooltip>Неверные имя пользователя или пароль</Form.Control.Feedback>
      </Form.Group>
      <Button
        type="submit"
        variant="outline-primary"
        className="w-100 mb-3"
      >
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
