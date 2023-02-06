import React from 'react';

import { BsFacebook, BsInstagram, BsSnapchat, BsYoutube } from 'react-icons/bs';

import '../style/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <span>Our Social Media</span>
      <div className="footer-icon">
        <BsFacebook />
        <BsInstagram />
        <BsSnapchat />
        <BsYoutube />
      </div>
      <span>@2023 Pizza'Hut</span>
    </div>
  );
}
export default Footer;
