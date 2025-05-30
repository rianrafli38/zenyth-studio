import { render } from 'preact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ThankYou from './pages/ThankYou.jsx';
import './index.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);