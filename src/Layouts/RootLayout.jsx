import React from 'react';
import Navbar from '../Components/Navabr/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className=''>
              <header>
                <Navbar></Navbar>

              </header>
              <main className='min-h-screen'>
                <Outlet></Outlet>
              </main>
              <footer>
                <Footer></Footer>
              </footer>
        </div>
    );
};

export default RootLayout;