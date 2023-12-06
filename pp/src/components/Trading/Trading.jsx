import React from 'react';
import './Trading.css';

function Trading({image, name, date, trading, balance}) {
    return (
        <div className="trading">
            <img src={image} alt='' className='trading-image' />
            <p>
                <h2 className='trading-name'><b>{name}</b></h2>
                <h3 className='trading-date'>{date}</h3>
            </p>
            <p style={{width:'105px'}}></p>
            <p>
                <h2 className='trading-trading'><b>{trading}</b></h2>
                <h3 className='trading-balance'>{balance}</h3>
            </p>
        </div>
    )
}

export default Trading;