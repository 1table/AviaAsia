import React, { useState } from 'react';
import './About.css';
// import planeImage1 from '../../assets/photo_2024-05-29_22-43-30.jpg';
// import planeImage2 from '../../assets/photo_2024-05-29_22-44-02.jpg';

const About = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">Авиакомпания "SkyHigh Airlines"</h1>
            </header>
            <div className="content">
                <div className="rating-widget">
                    {[...Array(maxRating)].map((_, index) => (
                        <div
                            key={index}
                            className={`star ${index < (hoverRating || rating) ? 'filled' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(index + 1)}
                        >
                            ★
                        </div>
                    ))}
                </div>
                {/* <img src={planeImage1} alt="Самолет SkyHigh Airlines" className="image" /> */}
                <div className="text-block">
                    <p>
                        SkyHigh Airlines — это ведущая авиакомпания, предоставляющая широкий спектр услуг для пассажиров.
                        Наша миссия — обеспечить комфортное и безопасное путешествие для всех наших клиентов. Мы гордимся
                        нашими современными самолетами, высококвалифицированными пилотами и дружелюбным персоналом,
                        который всегда готов помочь.
                    </p>
                    <p>
                        Наша авиакомпания была основана в 1990 году и с тех пор непрерывно развивается, внедряя новейшие
                        технологии и стандарты безопасности. Мы выполняем рейсы в более чем 100 направлений по всему миру,
                        обеспечивая пассажирам удобные стыковки и высокий уровень сервиса на борту.
                    </p>
                </div>
                {/* <img src={planeImage2} alt="Самолет SkyHigh Airlines" className="image" /> */}
                <div className="text-block">
                    <p>
                        Мы стремимся к устойчивому развитию и активно работаем над сокращением нашего экологического
                        следа. SkyHigh Airlines инвестирует в современные, более экологичные самолеты и поддерживает
                        различные инициативы по охране окружающей среды.
                    </p>
                </div>
            </div>
            <footer className="footer">
        <div className="footer-content">
          <div className="social-icons">
            <a href="https://www.facebook.com/SkyHighAirlines" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/SkyHighAirlines" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/SkyHighAirlines" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </div>
          <div className="links">
            <a href="/privacy-policy">Политика конфиденциальности</a>
            <a href="/terms-of-service">Условия обслуживания</a>
            <a href="/contact">Контакты</a>
          </div>
          <div className="copy">
            © 2024 SkyHigh Airlines. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
