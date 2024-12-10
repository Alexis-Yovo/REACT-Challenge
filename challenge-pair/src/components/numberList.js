import React from 'react';

const NumberList = ({ numbers }) => {
    return (
        <div className="number-list">
            {numbers.map((num, index) => (
                <span key={index} className="number">
                    {num}
                </span>
            ))}
        </div>
    );
};

export default NumberList;
