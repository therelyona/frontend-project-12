import { Button, Form } from 'react-bootstrap';

const LoginForm = () => (
  <Form className="col-12 col-md-6 mt-3 mt-md-0">
    <h1 className="text-center mb-4">Войти</h1>
    <Form.Group className="form-floating mb-3">
      <Form.Control
        name="username"
        autoComplete="username"
        required
        placeholder="Ваш ник"
        id="username"
        value=""
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
        value=""
      />
      <Form.Label htmlFor="password">Пароль</Form.Label>
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

export default LoginForm;
