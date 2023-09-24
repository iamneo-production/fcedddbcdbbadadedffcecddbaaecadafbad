// eslint-disable-next-line
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Myorder from './components/Order/Myorder';
import PlaceOrder from './components/Order/PlaceOrder';
import Layout from './components/Layout';
import Login from './components/Login'; 
import Registration from './components/User/Registration'; 
import './styles.css';
import 'react-bootstrap/dist/react-bootstrap';
import AdminGifts from './components/Admin/AdminGifts';
import AdminThemes from './components/Admin/AdminThemes';
import Adminvieworders from './components/Admin/Adminvieworders';
import PaymentForm from './components/User/PaymentForm';
import ThankYou from './components/User/ThankYou';

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
        <Route path="PaymentForm" element={<PaymentForm />} />
        <Route path="ThankYou" element={<ThankYou />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="AdminGifts" element={<AdminGifts />} />
        <Route path="Adminvieworders" element={<Adminvieworders />} />
        <Route path="AdminThemes" element={<AdminThemes />} /> {/* Add a route for AdminGifts */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

