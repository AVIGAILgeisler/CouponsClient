import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Menu from '../menu/Menu';
//import Register from '../login/Login';
import './Layout.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import CouponContainer from '../../Containers/CouponContainer';
//import Login from '../login/Login';

function Layout() {
  return (
    <BrowserRouter>
    <section className="layout">
      <header>
        <Header />
      </header>

      <aside>
        <Menu />
      </aside>

      <main>
          <Routes>
            <Route path="/" element={<CouponContainer />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/coupons" element={<CouponContainer/>} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

      <footer>
        <Footer />
      </footer>
    </section>
    </BrowserRouter>

  );
}

export default Layout;
