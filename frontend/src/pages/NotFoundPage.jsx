import { Link } from 'react-router-dom';
import notFoundImage from '../assets/notFoundImage.png';
import routes from '../utils/routes.js';
import Image from '../components/Pages/Image.jsx';

const NotFoundPage = () => (
  <div className="text-center">
    <Image
      src={notFoundImage}
      alt="Страница не найдена"
    />
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className="text-muted">
      Но вы можете перейти
      <Link to={routes.mainPagePath()}>на главную страницу</Link>
    </p>
  </div>
);

export default NotFoundPage;
