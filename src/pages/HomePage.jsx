import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/navbar/Navbar';
import Body from '../components/body/Body';  
import Footer from '../components/footer/Footer';
import React, { useState } from "react";


function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    return(
      <div >
        <Navbar   isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />  
        <Body isDropdownOpen={isDropdownOpen}/>
        <Footer />
      </div>
    )
}

export default HomePage;
