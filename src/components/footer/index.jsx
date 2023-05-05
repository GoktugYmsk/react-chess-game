import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">Satranç Oyunu</div>
        <ul className="menu">
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Oyun Kuralları</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
