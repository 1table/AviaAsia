import React, { useEffect, useState } from 'react';
import './search.css'
import { Link } from 'react-router-dom';

const Search2 = () => {
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

    return (
        <div>
          <div className="search-menu">
          <input type='search' className='search-country'/>
          <Link to={'/'}><button type="button" class="search-btn">Найти</button></Link>
          </div>
            <div className='search-block'>
                {data && data.map(country => (
                    <div key={country.id}>
                        <div>
                            <span>{country?.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search2;