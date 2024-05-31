import React, {useState, useEffect} from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

import Registration from '../Registration/Registration';
// import '../../assets/search/search1'

// import Carousel from '../../components/Carousel/Carousel'

  
const Home = () => {
  // const [inputValue, setInputValue] = useState('');
  // const [inputValue2, setInputValue2] = useSКак мы работаем?tate('');

  // useEffect(() => {
  //   const spanValue = localStorage.getItem('spanValue');
  //   if (spanValue) {
  //     setInputValue(spanValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   const spanValue2 = localStorage.getItem('spanValue2');
  //   if (spanValue2) {
  //     setInputValue2(spanValue2);
  //   }
  // }, []);
  
  return (
    <div className='main'>
        <div className="main-block">
          <section className='first-section'>
           <h1 className='first-text'>Покупайте быстро и удобно
           <br/> в любое время</h1>
           {/* <button type="submit" className='registration_button' >Купить билет</button> */}
           <button onClick={() => {window.location.assign('/registration')}} type="submit" className='registration_button' >Купить билет</button>
            
          </section>
          <section className='second-section'>
            {/* <Carousel /> */}
          </section>
            <section className="third-section">
              <h2>Как мы работаем?</h2>
              <div className='card-container'>
                <div className='card-section'>
                  <h3> Шаг 1 </h3>
                  <h4>Заполните форму регистрации</h4>
                  <p> 
                     Заполните формы поиска авиабилетов (направления,
                     даты, количество пассажиров)
                  </p>
                </div>
                <div className='card-section'>
                  <h3> Шаг 2 </h3>
                  <h4>Выберите время прибытия и отправления</h4>
                  <p>
                      Выберите оптимальное
                      время вылета и прибытия
                  </p>

                </div> 
              </div>
              <div className='card-container'>
                <div className='card-section'>
                  <h3> Шаг 3 </h3>
                  <h4>Купите билет</h4>
                  <p> 
                    Заполните данные пассажиров в строгом соответствии с
                    паспортом. Сделав выбор нажмите кнопку “Купить билет”
                  </p>
                </div>
                <div className='card-section'>
                  <h3>Шаг 4</h3>
                  <h4>Готово! Собирайте чемоданы</h4>
                  <p> 
                  После покупки авиабилетов, вы можете узнать у
                  представителя авиакомпании о необходимости
                  распечатанного авиабилета и распечатать его
                  </p>
                </div>          
              </div>


              {/* <Link to={'/search'} className="change-span"><input type='search' value={inputValue} className='change-input1' placeholder='откуда'  aria-label='search'/></Link>
              <Link to={'/search2'} className="change-span"><input type="search" value={inputValue2} className='change-input'aria-label='search'  placeholder='куда'/></Link>
              <span className="change-span"><input type="text" className='change-input' placeholder='когда'/></span>
              <span className="change-span"><input type="text" className='change-input' placeholder='обратно'/></span>
              <span className="change-span"><input type="text" className='change-input2' placeholder=''/></span> */}
            </section>
          {/* <button type="button" class="btn btn-primary btn-lg">Найти билет</button> */}
        </div>
    </div>
  )
}

export default Home;