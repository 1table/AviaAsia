import React from 'react';
import './Footer.css';
import facebookIcon from './facebook-icon.png';
import twitterIcon from './twitter-icon.png';
import instagramIcon from './instagram-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com/AviaAsia" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/AviaAsia" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/AviaAsia" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className="links">
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <a href="/terms-of-service">Условия обслуживания</a>
          <a href="/contact">Контакты</a>
        </div>
        <div className="copy">
          © 2024 AviaAsia Airlines. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
