const Wind = ({ wind }) => {
    return (
        <>
            <p className='wind-title'>Wind</p>
            <ul className='wind-list'>
                <li>Speed: {wind.speed} MPH</li>
                <li>Direction: {wind.deg}°</li>
                <li>Gust: {wind.gust} MPH</li>
            </ul>
        </>
    );
}

export default Wind;