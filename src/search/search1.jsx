import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

const Search = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        const fetchTabData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/countries`);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error, 'что-то пошло не так');
            }
        }

        fetchTabData();
    }, []);

    const handleSpanClick = (countryTitle) => {
        localStorage.setItem('spanValue', countryTitle);
        window.open('/', '_blank');
    };

    const filteredCountries = data.filter(country => {
        return country.title.toLowerCase().includes(value.toLowerCase());
    });

    return (
        <div>
            <div className="search-menu">
                <input
                    type='text'
                    className='search-country'
                    onChange={(event) => setValue(event.target.value)}
                />
                <Link to={'/'}><button type="button" className="search-btn">Найти</button></Link>
            </div>
            <div className='search-block'>
                {filteredCountries.map(country => (
                    <div key={country.id}>
                        <div>
                            <span onClick={() => handleSpanClick(country.title)} className='country-span'>{country.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
