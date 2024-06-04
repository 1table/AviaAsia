import React, { useState } from 'react';
import Footer from './pages/Footer/Footer';

import './About.css';
import planeImage1 from '../../assets/photo_2024-05-29_22-43-30.jpg';
import planeImage2 from '../../assets/photo_2024-05-29_22-44-02.jpg';

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
                <img src={planeImage1} alt="Самолет AviaAsia Airlines" className="image" />
        <div className="text-block">
          <p>
            AviaAsia — это ведущая авиакомпания, предоставляющая широкий спектр услуг для пассажиров. 
            Наша миссия — обеспечить комфортное и безопасное путешествие для всех наших клиентов. Мы гордимся 
            нашими современными самолетами, высококвалифицированными пилотами и дружелюбным персоналом, 
            который всегда готов помочь.
          </p>
          <p>
            Наша авиакомпания была основана в 2024 году и с тех пор непрерывно развивается, внедряя новейшие 
            технологии и стандарты безопасности. Мы выполняем рейсы в более чем 100 направлений по всему миру, 
            обеспечивая пассажирам удобные стыковки и высокий уровень сервиса на борту.
          </p>
        </div>
        <img src={planeImage2} alt="Самолет AviaAsia" className="image" />
        <div className="text-block">
          <p>
            Мы стремимся к устойчивому развитию и активно работаем над сокращением нашего экологического 
            следа. AviaAsia инвестирует в современные, более экологичные самолеты и поддерживает 
            различные инициативы по охране окружающей среды.
          </p>
        </div>
        <img src={planeImage3} alt="Самолет AviaAsia" className="image" />
        <div className="text-block">
          <p>
            Наша компания постоянно совершенствует свои услуги, чтобы предоставить нашим пассажирам 
            незабываемый опыт полета. Мы уделяем особое внимание комфорту и безопасности каждого 
            пассажира, обеспечивая индивидуальный подход к каждому клиенту.
          </p>
        </div>
        <img src={planeImage4} alt="Самолет AviaAsia" className="image" />
        <div className="text-block">
          <p>
            В AviaAsia мы также стремимся к высокому уровню сервиса на земле. Наши аэропорты обеспечены 
            современными удобствами, чтобы сделать ваше путешествие еще более приятным и комфортным.
          </p>
        </div>
        <img src={planeImage5} alt="Самолет AviaAsia" className="image" />
        <div className="text-block">
          <p>
            Мы гордимся своим международным присутствием и многообразием направлений, которые мы обслуживаем. 
            Независимо от вашего пункта назначения, вы можете быть уверены, что AviaAsia обеспечит вас 
            надежным и комфортным перелетом.
          </p>
        </div>
      </div>
      <div className="rating-widget">
        <h2>Rate Us</h2> 
        <StarRating
          rating={rating}
          starRatedColor="blue"
          changeRating={changeRating}
          numberOfStars={5} name='rating' />
      </div>
    </div>
  );
};
              

export default About;
