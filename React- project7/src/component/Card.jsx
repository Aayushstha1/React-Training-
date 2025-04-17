import React from 'react';

const Card = ({ name, cast, religion }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            <h2>{name}</h2>
            <p><strong>Cast:</strong> {cast}</p>
            <p><strong>Religion:</strong> {religion}</p>
        </div>
    );
};

export default Card;

