import React from 'react';
import footerBg from '../../../assets/images/footer_bg.png'; // Adjust the path as necessary
import logo from "../../../assets/images/Supreme_Group_Logo.png";
import group from "../../../assets/images/Group.png";
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <div className="footer-container relative bg-cover bg-center py-8 text-gray-700 mt-32 border-t border-gray-200" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-content mx-auto px-4 md:px-6 relative max-w-5xl">
        <div className="footer-logo mb-4 md:mb-16 flex  md:justify-start justify-center mt-20 ">
          <img src={logo} alt="Supreme Group Logo" className="h-16" /> {/* Adjust the logo path */}
        </div>
        <div className="footer-sections grid grid-cols-1 sm:grid-cols-2 gap-8 md:flex md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="my-8 font-semibold text-center md:text-left">APPLICATIONS</h3>
            <ul className="text-center md:text-left">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="my-8 font-semibold text-center md:text-left">COMPANY</h3>
            <ul className="text-center md:text-left">
              <li>Innovation</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Global Competency</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="my-8 font-semibold text-center md:text-left">MORE</h3>
            <ul className="text-center md:text-left">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="my-8 font-semibold text-center md:text-left">FOLLOW US</h3>
            <ul className="text-center md:text-left">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom flex flex-col md:flex-row justify-between text-center md:text-left text-sm mt-32 mb-24">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
        </div>
      </div>
      <img src={group} alt="Group" className="footer-image absolute bottom-0 right-0" style={{ maxWidth: '450px' }} /> {/* Adjust the max-width as needed */}
    </div>
  );
};

export default Footer;
