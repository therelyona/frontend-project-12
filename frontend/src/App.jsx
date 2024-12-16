import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './utils/routes';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './components/Pages/MainLayout';
import LoginPage from './pages/LoginPage';
import AuthProvider from './contexts/AuthProvider';
import store from './store/store';
import ChatPage from './pages/ChatPage';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <MainLayout>
          <Routes>
            <Route path={routes.mainPagePath()} element={<ChatPage />} />
            <Route path={routes.loginPagePath()} element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
