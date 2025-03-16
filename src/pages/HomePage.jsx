import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar/Navbar';
import Body from '../components/body/Body';  
import Footer from '../components/footer/Footer';


function HomePage() {
    return(
      <div >
        <Navbar />  
        <Body />
        <Footer />
      </div>
    )
}

export default HomePage;
