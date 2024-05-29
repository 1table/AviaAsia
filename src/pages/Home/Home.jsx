import './Home.css'
import { Link } from 'react-router-dom';

import RegistrationForm from '../../assets/Registration/RegistrationForm'

const Home = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="main-block">
          <div className="text-block">
            <h1 className='first-text'>Билеты по скидке</h1>
            <h3 className=' second-text'>Помогаем вам экономить</h3>
            <div className="change-block">
              <RegistrationForm />
              <Link to={'/search'} className="change-span"><input type='search' className='change-input1' placeholder='откуда'  aria-label='search'/></Link>
              <Link to={'/search2'} className="change-span"><input type="search" className='change-input'aria-label='search'  placeholder='куда'/></Link>
              <span className="change-span"><input type="text" className='change-input' placeholder='когда'/></span>
              <span className="change-span"><input type="text" className='change-input' placeholder='обратно'/></span>
              <span className="change-span"><input type="text" className='change-input2' placeholder=''/></span>
            </div>
            <button type="button" class="btn btn-primary btn-lg">Найти билет</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;