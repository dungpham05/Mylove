import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'Assets/Scss/Index.scss';
import Header from 'Layouts/Header';
import NoPage from 'Pages/Errors/NoPage';
import Login from 'Pages/Authentications/Login';
import Home from 'Pages/Mains/Home';

const routing  = () => (
  <BrowserRouter>
    <div className='fullpage'>
      <div className='components'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default routing;
