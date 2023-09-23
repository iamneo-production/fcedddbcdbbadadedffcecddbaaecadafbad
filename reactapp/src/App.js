// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/User/Homepage';
import Myorder from './components/User/Myorder';
import PlaceOrder from './components/User/PlaceOrder';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import Login from './components/Login'; 
import Registration from './components/Registration'; 
import './styles.css';
import 'react-bootstrap/dist/react-bootstrap';
import AdminGifts from './components/Admin/AdminGifts';
import AdminThemes from './components/Admin/AdminThemes';
import Adminvieworders from './components/Admin/Adminvieworders';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="/myorder/:giftName/:giftPrice" component={Myorder} />
        <Route path="Myorder" element={<Myorder />} />
        <Route path="PlaceOrder" element={<PlaceOrder />} />
        <Route path="Login" element={<Login />} />
        <Route path="Logout" element={<Login />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="AdminGifts" element={<AdminGifts />} />
        <Route path="Adminvieworders" element={<Adminvieworders />} />
        <Route path="AdminThemes" element={<AdminThemes />} /> {/* Add a route for AdminGifts */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
