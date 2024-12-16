import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Загрузка...</span>
  </Spinner>
);

export default Loading;
