import Container from '../components/Pages/Container';
import Image from '../components/Pages/Image';
import registrationImage from '../assets/registrationImage.png';
import RegistrationForm from '../components/Pages/RegistrationForm';

const SignUpPage = () => (
  <Container>
    <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
      <div>
        <Image src={registrationImage} alt="Регистрация" />
      </div>
      <RegistrationForm />
    </div>
  </Container>
);

export default SignUpPage;
