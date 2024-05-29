import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css'

const Search = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchTabData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/countries`);
                const data = await response.json();
                setData(data);
            } catch (e) {
                console.log(e, 'что-то пошло не так');
            }
        }

        fetchTabData();
    }, []);

    const [value, setValue] = useState('')

    const filteredCountries = data.filter(country => {
        return country.title.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <div>
          <div className="search-menu">
          <input 
          type='text'
           className='search-country'
           onChange={(event) => setValue(event.target.value)}
           />
          <Link to={'/'}><button type="button" class="search-btn">Найти</button></Link>
          </div>
            <div className='search-block'>
                {filteredCountries.map(country => (
                    <div key={country.id}>
                        <div>
                            <span className='country-span'>{country?.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;

