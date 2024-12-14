import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './utils/routes';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './components/MainLayout';
import LoginPage from './pages/LoginPage';
import AuthProvider from './contexts/AuthProvider';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <MainLayout>
        <Routes>
          <Route path={routes.mainPagePath()} element={<LoginPage />} />
          <Route path={routes.loginPagePath()} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
