import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

   useEffect(() => {
    const spanValue = localStorage.getItem('spanValue');
    if (spanValue) {
      setInputValue(spanValue);
    }
  }, []);

  useEffect(() => {
    const spanValue2 = localStorage.getItem('spanValue2');
    if (spanValue2) {
      setInputValue2(spanValue2);
    }
  }, []);

  return (
    <div className="change-block">
      <Link to={'/search'} className="where">
        <input
          type='search'
          value={inputValue}
          className='change-input1'
          placeholder='откуда'
          aria-label='search'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Link>
      <Link to={'/search2'} className="back">
        <input
          type="search"
          value={inputValue2}
          className='change-input'
          aria-label='search'
          placeholder='куда'
          onChange={(e) => setInputValue2(e.target.value)}
        />
      </Link>
    </div>
  );
};

export default SearchForm;