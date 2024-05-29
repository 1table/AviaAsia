import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

const Search = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showResults, setShowResults] = useState(false);

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

    const handleSpanClick2 = (countryTitle2) => {
        localStorage.setItem('spanValue2', countryTitle2);
        window.open('/', '_blank');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setFilteredData(data.filter(country => country.title.toLowerCase().includes(value.toLowerCase())));
            setShowResults(true);
        }
    };

    return (
        <div>
            <div className="search-menu">
                <input
                    type='text'
                    className='search-country'
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button type="button" className="search-btn">Найти</button>
            </div>
            <div className='search-block' style={{ display: showResults && filteredData.length > 0 ? 'block' : 'none' }}>
                {filteredData.map(country => (
                    <div key={country.id}>
                        <div>
                            <span onClick={() => handleSpanClick2(country.title)} className='country-span'>{country.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
