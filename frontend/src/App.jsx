import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './utils/routes';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './components/MainLayout';
import LoginPage from './pages/LoginPage';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path={routes.homePagePath()} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default App;
