const Extra = ({ extra, visibility }) => {
    return (
        <ul className='extra-list'>
            <li>Pressure: {extra.pressure} hPa</li>
            <li>Humidity: {extra.humidity}%</li>
            <li>Visibility: {visibility / 1000} KM</li>
        </ul>
    );
}

export default Extra;