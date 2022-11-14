import './Card.css';

const Card = () => {
    return (
        <div className='container'>
            <div className='temp'>
                <p>Location</p>
                <div className='temp-container'>
                    <p className='main-temp'>48°</p>
                    <p className='feels-like'>Feels Like</p>
                </div>
                <p>Min 42° / Max 50°</p>
            </div>
            <div>Des</div>
            <div>Wind</div>
            <div>Extra</div>
        </div>
    );
}

export default Card;