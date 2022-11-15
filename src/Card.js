import './Card.css';
import { useState, useEffect } from 'react';
import Temp from './Temp';
import Wind from './Wind';
import Extra from './Extra';

const Card = () => {
    const [weather, setWeather] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getWeather = async () => {
                if (query) {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=1eaa5830a3eff9bcca25824a6ef79e0b&units=imperial`);
                    const json = await response.json();
                    console.log(json);

                    if (json.cod !== '404') {
                        setWeather(json);
                    } else {
                        setWeather(false);
                    }
                }
        }

        getWeather();
    }, [query]);

    if (weather) {
        return (
            <>
                <div className='container'>
                    <div className='temp'>
                        <Temp temp={weather.main} location={weather.name}/>
                    </div>
                    <div className='description'>
                        <input type={'search'} placeholder={'Search'} className='search' onChange={(event) => {setQuery(event.target.value)}}></input>
                        
                        {weather.weather[0].description}
                        
                        </div>
                    <div className='wind'>
                        <Wind wind={weather.wind}/>
                    </div>
                    <div className='extra'>
                        <Extra extra={weather.main} visibility={weather.visibility}/>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='container'>
                    <div className='temp'>

                    </div>
                    <div className='description'>
                        <input type={'search'} placeholder={'Search'} className='search' onChange={(event) => {setQuery(event.target.value)}}></input>
                        
                        
                        
                        </div>
                    <div className='wind'>

                    </div>
                    <div className='extra'>

                    </div>
                </div> 
            </>
        );
    }
}

export default Card;