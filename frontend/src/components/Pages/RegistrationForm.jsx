import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import routes from '../../utils/routes';
import { useSignUpMutation } from '../../store/api/chatApi';
import { signUpShema } from '../../utils/validate';

const RegistrationForm = () => {
  const [registerFailed, setRegisterFailed] = useState(false);
  const [signUp] = useSignUpMutation();
  const auth = useAuth();
  const navigate = useNavigate();

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpShema(),
    onSubmit: async (values) => {
      setRegisterFailed(false);
      const trimmedValues = {
        username: values.username.trim(),
        password: values.password.trim(),
        confirmPassword: values.confirmPassword.trim(),
      };

      try {
        const res = await signUp(trimmedValues).unwrap();
        auth.logIn(res.token, trimmedValues.username);
        navigate(routes.mainPagePath());
      } catch (error) {
        formik.setSubmitting(false);
        if (error.status === 401) {
          inputRef.current.select();
          return;
        }
        if (error.status === 409) {
          inputRef.current.select();
          setRegisterFailed(true);
        }
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="w-50">
      <h1 className="text-center mb-4">Регистрация</h1>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          placeholder="От 3 до 20 символов"
          name="username"
          autoComplete="username"
          id="username"
          required
          isInvalid={registerFailed || formik.errors.username}
          ref={inputRef}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="username">Имя пользователя</Form.Label>
        <Form.Control.Feedback type="invalid" tooltip>
          {registerFailed ? 'Такой пользователь уже существует' : formik.errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          placeholder="Не менее 6 символов"
          name="password"
          autoComplete="new-password"
          type="password"
          id="password"
          required
          isInvalid={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="username">Пароль</Form.Label>
        <Form.Control.Feedback type="invalid" tooltip>
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-floating mb-4">
        <Form.Control
          placeholder="Пароли должны совпадать"
          name="confirmPassword"
          autoComplete="new-password"
          type="password"
          id="confirmPassword"
          required
          isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="confirmPassword">Подтвердите пароль</Form.Label>
        <Form.Control.Feedback type="invalid" tooltip>
          {formik.errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="w-100" variant="outline-primary">
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default RegistrationForm;