import { Link } from 'react-router-dom';
import Container from '../components/Pages/Container';
import Image from '../components/Pages/Image';
import loginImage from '../assets/loginImage.png';
import LoginForm from '../components/Pages/LoginForm';
import routes from '../utils/routes';

const LoginPage = () => (
  <Container>
    <div className="card-body row p-5">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <Image src={loginImage} alt="Войти" />
      </div>
      <LoginForm />
    </div>
    <div className="card-footer p-4">
      <div className="text-center">
        <span>Нет аккаунта?</span>
        <Link to={routes.signUpPagePath()}>Регистрация</Link>
      </div>
    </div>
  </Container>
);

export default LoginPage;
