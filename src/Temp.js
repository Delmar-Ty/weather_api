const Temp = ({ temp, location }) => {
    return (
        <>
            <p className='location'>Location: {location}</p>
                <div className='temp-container'>
                    <p className='main-temp'>{temp.temp}°F</p>
                    <p className='feels-like'>Feels Like {temp.feels_like}°F</p>
                </div>
            <p className='range'>Min: {temp.temp_min}°F / Max: {temp.temp_max}°F</p>
        </>
    );
}

export default Temp;