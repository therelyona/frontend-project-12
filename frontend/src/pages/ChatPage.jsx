import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import routes from '../utils/routes';
import ChatContainer from '../components/Chat/ChatContainer';

const ChatPage = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate(routes.loginPagePath());
    }
  }, []);

  return (
    <ChatContainer />
  );
};

export default ChatPage;
